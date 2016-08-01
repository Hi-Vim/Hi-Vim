function register_VIM_TUTORIAL_SECTIONS(interpreter, messager, createSection, registerSection, showCommandOneByOne, doc) {
  var G = VIM_GENERIC;

  var pressEnterToContinue = "Press enter to continue.";

  function showInfo(text) { $('.info').text(text); } //.show(); }

  function sendMessageAsync(message) { setTimeout(function() { messager.sendMessage(message); }, 0); }
  
  function requireEnterToContinue() { showCommandOneByOne(["Enter"], accepterCreator); }

  function defaultPre() { interpreter.environment.setInsertMode(); }

  function defaultPost() {
    interpreter.environment.setCommandMode();
    showInfo(pressEnterToContinue);
    requireEnterToContinue();
  }

  function wait_for_abort() {
    messager.listenTo('abort_section', function() { // XXX: this will linger if no abort_section is done
      sendMessageAsync('tutorial_next_section');
      return messager.REMOVE_THIS_LISTENER;
    });
  }

  /** FIXME: should reuse existing code/key functionality */
  var accepterCreator = function(command) {
    var accepter = function(key) {
      if(command === 'ctrl-v') return key === 22 || ($.browser.mozilla && key === 118); //XXX: ugly and don't even work properly
      if(command === "Esc") return key === 27;
      if(command === "Enter") return key === 13;

      var keyAsCode = G.intToChar(key);
      var neededCode = command;
      
      return keyAsCode === neededCode;
    };

    return accepter;
  };

  function cmd(code, postFun) {
      return {
        'code': code,
        'postFun': postFun
      };
    }

    /** TEMPORARY duplication */
    function writeChar(code) {
      var $ch = $(doc.getChar(code));
      $ch.insertBefore($('.cursor'));
    }

    function insertText(text, newline) {
      var mode = interpreter.environment.getMode();

      interpreter.environment.setInsertMode();
      
      newline = newline !== undefined ? newline : true;

      if(newline) {
        interpreter.interpretSequence(["Esc", "o"]);
      }

      var words = text.split(" ");

      G.for_each(words, function(word) {
        //interpreter.interpretSequence(word);
        G.for_each(word, writeChar);
        interpreter.interpretOneCommand("Space");
      });

      interpreter.environment.setMode(mode);
    }

	var introduction_section = createSection(I18n.getValue("Introduction"),
        defaultPre,
		new Array(
			I18n.getValue("Hello"),
			I18n.getValue("I am an interactive |Vim| tutorial."),
			I18n.getValue("I'll teach you what Vim is about without hassle. If you are in a hurry, press any key to fast forward."),
			I18n.getValue("To practice what you've learned, try out the |practice| page. It has a context sensitive reference for commands."),
			I18n.getValue("Now, let me introduce you to basics of Vim.")
		), defaultPost);


    var two_modes_section = createSection(I18n.getValue("Two modes, insert and normal"),
        defaultPre,
	new Array(
		I18n.getValue("Vim has two basic modes. One is |insert| mode, in which you write text as if in normal text editor."),
		I18n.getValue("Another is |normal| mode which provides you efficient ways to navigate and manipulate text."),
		I18n.getValue("At any time, you can see which mode you are in on the status bar which is located at the top of the editor."),
		I18n.getValue("To change between modes, use |Esc| for normal mode and |i| for insert mode"),
		I18n.getValue("Let's try it out! First, change to insert mode.")
	),
    function() {
        interpreter.environment.setCommandMode();
        showCommandOneByOne(
            [
             cmd("i", function() {
               $('.screen_view').addClass('active_context');
               insertText(I18n.getValue("Good, now you're in insert mode. Write something and change back to normal mode."));
             }),
             cmd("Esc", function() {
               $('.screen_view').removeClass('active_context');
               interpreter.environment.interpretOneCommand("G");
               insertText(I18n.getValue("Good. Let's move on to another section."));
             }),
             "Enter"
            ],
            accepterCreator);
    }
    );

    var basic_movement = createSection(I18n.getValue("Basic movement: h, j, k, and l"),
        defaultPre,
    new Array(
        I18n.getValue("In contrast to regular text editor, you use keys |h|, |j|, |k|, and |l| instead of arrow keys to move the cursor."),
        I18n.getValue("Let's see how it works in practice!")
    ), function() {
        interpreter.environment.setCommandMode();
        showCommandOneByOne([
          "h", "h", "h", "k", "l", "l", "h", "h", "j",
          cmd("Enter", function() {
            insertText(I18n.getValue("Let's move on."));
          }), "Enter"],
          accepterCreator);
    });

    var word_movement = createSection(I18n.getValue("Word movement: w, e, b"),
        defaultPre,
      new Array(
        I18n.getValue("To navigate the text in terms of words, you can use keys |w|, |b|, and |e| (also W, B, E in real Vim)."),
        I18n.getValue("|w| moves to the start of next word; |e| moves to the end of the word; and |b| moves to beginning of the word."),
		"|w| moves to the start of next word; |e| moves to the end of the word; and |b| moves to beginning of the word."
	  ),function() {
        interpreter.environment.setCommandMode();
        showCommandOneByOne([
          "b", "b", "w", "b", "e", "w",
          cmd("Enter", function() {
            insertText(I18n.getValue("Word! Let's move on."));
          }), "Enter"],
          accepterCreator);
    });

    var times_movement = createSection(I18n.getValue("Number powered movement, e.g. 5w"),
      defaultPre,
	  new Array(    
		I18n.getValue("Moving within the text is not limited to individual keys; you can combine movement keys with a |number|. For example, |3w| is the same as pressing w three times."),
		"Moving within the text is not limited to individual keys; you can combine movement keys with a |number|."
      ),function() {
        interpreter.environment.setCommandMode();
        interpreter.interpretSequence("0");
        showCommandOneByOne(["3", "w", "9", "l", "2", "b",
            cmd("Enter", function() { insertText(I18n.getValue("With numbers, ain't no numbness.")) }),
            "Enter"
        ],
        accepterCreator)
      });

    var times_inserting = createSection(I18n.getValue("Insert text repeatedly, e.g. 3iYes"),
        defaultPre,
        new Array(
            I18n.getValue("You can insert text multiple times."),
            I18n.getValue("For example, an underline of a header might consist of 30 |-|s."),
            "------------------------------",
            I18n.getValue("With |30i-| |Esc|, there's no need to press |-| 30 times."),
            I18n.getValue("Let's try it out: insert |go| three times.")
        ),
        function() {
            interpreter.environment.setCommandMode();
            showCommandOneByOne(
                ["3", "i", "g", "o", "Esc",
                cmdWithText("Enter", I18n.getValue("See? 10iAll work is only play Esc.")),
                "Enter"
                ], accepterCreator)
        });

    var find_occurrence = createSection(I18n.getValue("Find a character, f and F"),
        defaultPre,
        new Array(
			I18n.getValue("To find and move to the next (or previous) occurrence of a character, use |f| and |F|, e.g. |fo| finds next o."),
            I18n.getValue("You can combine f with a number. For example, you can find 3rd occurrence of 'q' with |3fq|, que?"),
            "You can combine f with a number. For example, you can find 3rd occurrence of 'q' with |3fq|, que?"
        ),
        function() {
          interpreter.environment.setCommandMode();
          interpreter.interpretSequence("0");
          showCommandOneByOne(["f", "w", "f", "s", "3", "f", "q",
              cmd("Enter", function() { insertText(I18n.getValue("F-f-f-ast!"))}),
              "Enter"
          ], accepterCreator)
        });

    var matching_parentheses = createSection(I18n.getValue("Go to matching parentheses, ％"),
      defaultPre,
      new Array(
        I18n.getValue("In text that is structured with parentheses or brackets, |(| or |{| or |[|, use |％| to jump to the matching parenthesis or bracket."),
        I18n.getValue("Here is (a sample) text to try that.")
      ),
      function() {
        interpreter.environment.setCommandMode();
        interpreter.interpretSequence(["F", "("]);
        showCommandOneByOne(["%", "%", "Enter"], accepterCreator)
      });

    var start_and_end_of_line = createSection(I18n.getValue("Go to start/end of line, 0 and $"),
      defaultPre,
      [
        I18n.getValue("To reach the beginning of a line, press |0|."),
        I18n.getValue("For the end of a line, there's |$|")
      ],
      function() {
        interpreter.environment.setCommandMode();
        showCommandOneByOne(["0", "$", "0", "Enter"], accepterCreator)
      });

    var word_under_cursor = createSection(I18n.getValue("Find word under cursor, * and #"),
      defaultPre,
        new Array(
			I18n.getValue("Find the next occurrence of the word under cursor with |*|, and the previous with |#|."),
			"Find the next occurrence of the word under cursor with |*|, and the previous"
        ),
        function() {
          interpreter.environment.setCommandMode();
          interpreter.interpretSequence(["0", "w"]);
          showCommandOneByOne(["*", "*", "#",
              cmd("#", function() {
                insertText(I18n.getValue("Nothing new under the cursor."))
              }), "Enter"], accepterCreator)
        });

    var goto_line = createSection(I18n.getValue("Goto line, g and G"),
        defaultPre,
        new Array(
		 I18n.getValue("|gg| takes you to the beginning of the file; |G| to the end."),
         I18n.getValue("To jump directly to a specific line, give its |line number| along with |G|."),
         I18n.getValue("Now go to the beginning of this screen with |gg| and then back to end with |G|.")
        ),
        function() {
          interpreter.environment.setCommandMode();
          showCommandOneByOne(["g", "g", "G",
             cmd("Enter", function() {
                 insertText(I18n.getValue("Go to line 2 with 2G."));
             }),
             "2", "G",
             cmd("Enter", function() {
                insertText(I18n.getValue("gg! G majorly rocks."))
             }), "Enter"
          ], accepterCreator)
        });

    var search_match = createSection(I18n.getValue("Search, /text with n and N"),
      defaultPre,
      new Array(
        I18n.getValue("Searching text is a vital part of any text editor. In Vim, you press |/|, and give the text you are looking for."),
        I18n.getValue("You can repeat the search for next and previous occurrences with |n| and |N|, respectively."),
        I18n.getValue("For advanced use cases, it's possible to use regexps that help to find text of particular form (In real Vim)."),
        I18n.getValue("Let's try a simple text search."),
        I18n.getValue("Search for |text| and find the subsequent matches with |n|."),
        "Searching text is a vital part of any text editor. In Vim, you press |/|."
      ),
      function() {
        interpreter.environment.setCommandMode();
        interpreter.interpretSequence("1G");
        showCommandOneByOne(
          ["/", "t", "e", "x", "t", "Enter", "n", "n", "N", "N",
          cmd("Enter",
            function() {
              interpreter.interpretSequence(["/", "Esc"]);
              insertText(I18n.getValue("Slash through the needless with /n/e/e/d/l/e/s"));
            }),
          "Enter"], accepterCreator
        )
      });

    var removing = createSection(I18n.getValue("Removing a character, x and X"),
        defaultPre,
      new Array(
		  I18n.getValue("|x| and |X| delete the character under the cursor and to the left of the cursor, respectively"),
		  I18n.getValue("Try pressing |x| to remove the last word."),
		  "Try pressing |x| to remove the last word."
      ), function() {
        interpreter.environment.setCommandMode();
        showCommandOneByOne([
          "x", "x", "x", "x", "x",
          cmd("x", function() {
             insertText(I18n.getValue("Sometimes the treasure is the indicator (x)."));
          }),
            /*
          "X", "X", "X", "X", "X",
          cmd("X", function() {
            //insertText("You removed yourself from this section. Next!");
          }),
          */
          "Enter"],
          accepterCreator);
    });

    var replacing = createSection(I18n.getValue("Replacing letter under cursor, r"),
        defaultPre,
      new Array(
		  I18n.getValue("When you need to replace only one character under your cursor, without changing to insert mode, use |r|."),
		  I18n.getValue("Replace my")
      ), function() {
        interpreter.environment.setCommandMode();
        interpreter.interpretSequence("Fy");
        showCommandOneByOne([
          "r", "e", "Enter"],
          accepterCreator);
    });

    function cmdWithText(command, text) {
        return cmd(command, function() {
                 insertText(text);
               });
    }

    function setActiveContext() { $('.screen_view').addClass('active_context'); }
    function unsetActiveContext() { $('.screen_view').removeClass('active_context'); }

    var adding_line = createSection(I18n.getValue("Insert new line, o and O"),
      defaultPre,
      new Array(
            I18n.getValue("To insert text into a new line, press |o| or |O|"),
            I18n.getValue("After new line is created, the editor is set to |insert| mode."),
            I18n.getValue("Write a bit and get back to |normal| mode.")
        ), function() {
            interpreter.environment.setCommandMode();
            interpreter.interpretSequence(["2", "G"]);
            showCommandOneByOne([
                cmd("o", function() {
                    setActiveContext();
                }),
                cmd("Esc", function() {
                    unsetActiveContext();
                    insertText(I18n.getValue("Yep! Now big O to insert new line above the current line."));
                    interpreter.environment.setCommandMode();
                }),
                cmd("O", setActiveContext),
                cmd("Esc",
                    function() {
                        insertText(I18n.getValue("I bet you feel like O___o"));
                        unsetActiveContext();
                    }), "Enter"
            ], accepterCreator)
        });

    var deleting = createSection(I18n.getValue("Deleting, d"),
        defaultPre,
      new Array(
		  I18n.getValue("|d| is the delete command"),
		  I18n.getValue("You can combine it with movement, e.g. |dw| deletes the first word on the right side of the cursor"),
		  I18n.getValue("It also copies the content, so that you can paste it with |p| to another location (on real Vim)."),
		  "You can combine it with movement"
      ), function() {
        interpreter.environment.setCommandMode();
        interpreter.environment.interpretOneCommand("0");
        showCommandOneByOne([
          "d", "w",
          cmd("Enter", function() {
            insertText(I18n.getValue("The word is gone. Now let's remove two words with d2e."));
            insertText("The word is gone.");
            interpreter.environment.interpretSequence(["0"]);
          }),
          "d", "2", "e",
          cmd("Enter", function() {
            insertText(I18n.getValue("To 'de' or not to 'de', is not the question, anymore."));
          }), "Enter"],
          accepterCreator);
    });

  var repetition = createSection(I18n.getValue("Repetition with ."),
    defaultPre,
    new Array(
        I18n.getValue("To repeat the previous command, just press |.|"),
        I18n.getValue("First, remove two words with |d2w|."),
        I18n.getValue("After that, remove the rest of the words in this line with |.|"),
		"After that, remove the rest of the words in this line with |.|"
    ),
      function() {
        interpreter.environment.setCommandMode();
        interpreter.interpretOneCommand("0");
        showCommandOneByOne([
            "d", "2",
            "w", ".", ".", ".", ".", ".",
          cmd("Enter", function() {
            insertText(I18n.getValue("Repetition is the root of all periods."))
          }),
            "Enter"
        ], accepterCreator)
      });

  var visual_mode = createSection(I18n.getValue("Visual mode, v"),
    defaultPre,
    new Array(
      I18n.getValue("Besides insert and normal mode, Vim has also |visual| mode."),
      I18n.getValue("In visual mode, you select text using movement keys before you decide what to do with it."),
      I18n.getValue("Let's see how. Goto visual mode with |v|. Then select a word with |e|. After you've selected the text, you can delete it with |d|."),
      "This sentence has not seen the light."
    ),
    function() {
      interpreter.environment.setCommandMode();
      interpreter.interpretSequence("4b");
      showCommandOneByOne(
        ["v", "e", "l", "d",
          cmdWithText("Enter", I18n.getValue("(Visually gifted, I lost my words.)")), "Enter"
        ], accepterCreator)
    });

  var visual_block_mode = createSection("Visual block mode, ctrl-v",
    defaultPre,
    [
      "There is yet another mode: |visual block|. This makes it possible to insert text on many lines at once. Let's see how with an example list.",
      "<> A smart girl",
      "<> Ulysses",
      "<> Learn and teach",
      "First, move cursor to insert position. Then press |ctrl-v| to go into visual block mode. Move cursor vertically to select lines. Now press |I|, and prepend text to the selected area. |Esc| completes the insertion."
    ],
    function() {
      interpreter.environment.setCommandMode();
      interpreter.interpretSequence("2G");
      showCommandOneByOne(["l", "ctrl-v", "j", "j", "I", "o", "Esc",
        cmdWithText("Enter", "Blocks are obstacles for making progress."), "Enter"],
        accepterCreator);
    });

  var last_commands = createSection(I18n.getValue("Real Vim awaits"),
        defaultPre,
		new Array(
			I18n.getValue("Now you should be quite confident to enter the real Vim."),
			I18n.getValue("Most important commands to remember are |:w| (save), |:q| (quit), and |:q!| (quit without saving)."),
			I18n.getValue("Also don't |PANIC!| If you make a mistake, press |u| for undo and |ctrl+R| for redo"),
			I18n.getValue("If you have a problem, or want to learn more about what Vim offers, type |:help|")
		),	  
        defaultPost
    );

  var the_end = createSection(I18n.getValue("The end"), defaultPre,
      new Array(
        I18n.getValue("Thank you for your time."),
        I18n.getValue("This tutorial is still in progress; minor changes might occur daily. I am also developing other features/concepts."),
        I18n.getValue("Feel encouraged to send greetings or feedback to: henrik|.|huttunen|@|gmail|.|com")
      ), wait_for_abort);

  // append a and A
  // J join lines

  /**********************************************
   * Later
   **********************************************/

  // undo
  // change inside parentheses
  // macro

  /**********************************************
   * Register sections
   **********************************************/

    registerSections([
      introduction_section,
      two_modes_section,
      basic_movement,
      word_movement,
      times_movement,
      times_inserting,
      find_occurrence,
      matching_parentheses,
      start_and_end_of_line,
      word_under_cursor,
      goto_line,
      search_match,
      adding_line,
      removing,
      replacing,
      deleting,
      repetition,
      visual_mode,
      //visual_block_mode, // TODO enable when ctrl-v works with most browsers
      last_commands,
      the_end
    ]);

  function registerSections(sections) {
    G.for_each(sections, function(section) {
      registerSection(section);
    });
  }
}
