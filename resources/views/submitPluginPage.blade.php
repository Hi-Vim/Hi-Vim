@extends('layouts.puginmain')
@section('title', '提交插件')

@section('content')
    <div class="submit-page" data-reactid=".0.1.$/submit"><h1 data-reactid=".0.1.$/submit.0">Submit plugin</h1>
        <form class="form-horizontal" action="/api/submit" method="POST" data-reactid=".0.1.$/submit.1">
            <div class="control-group" data-reactid=".0.1.$/submit.1.0"><label class="control-label" for="name-input"
                                                                               data-reactid=".0.1.$/submit.1.0.0">Name</label>
                <div class="controls" data-reactid=".0.1.$/submit.1.0.1"><input type="text" name="name" id="name-input"
                                                                                placeholder="e.g. Fugitive"
                                                                                data-reactid=".0.1.$/submit.1.0.1.0"
                                                                                style="background-image: url(&quot;data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAYAAABzenr0AAAAAXNSR0IArs4c6QAAAfBJREFUWAntVk1OwkAUZkoDKza4Utm61iP0AqyIDXahN2BjwiHYGU+gizap4QDuegWN7lyCbMSlCQjU7yO0TOlAi6GwgJc0fT/fzPfmzet0crmD7HsFBAvQbrcrw+Gw5fu+AfOYvgylJ4TwCoVCs1ardYTruqfj8fgV5OUMSVVT93VdP9dAzpVvm5wJHZFbg2LQ2pEYOlZ/oiDvwNcsFoseY4PBwMCrhaeCJyKWZU37KOJcYdi27QdhcuuBIb073BvTNL8ln4NeeR6NRi/wxZKQcGurQs5oNhqLshzVTMBewW/LMU3TTNlO0ieTiStjYhUIyi6DAp0xbEdgTt+LE0aCKQw24U4llsCs4ZRJrYopB6RwqnpA1YQ5NGFZ1YQ41Z5S8IQQdP5laEBRJcD4Vj5DEsW2gE6s6g3d/YP/g+BDnT7GNi2qCjTwGd6riBzHaaCEd3Js01vwCPIbmWBRx1nwAN/1ov+/drgFWIlfKpVukyYihtgkXNp4mABK+1GtVr+SBhJDbBIubVw+Cd/TDgKO2DPiN3YUo6y/nDCNEIsqTKH1en2tcwA9FKEItyDi3aIh8Gl1sRrVnSDzNFDJT1bAy5xpOYGn5fP5JuL95ZjMIn1ya7j5dPGfv0A5eAnpZUY3n5jXcoec5J67D9q+VuAPM47D3XaSeL4AAAAASUVORK5CYII=&quot;); background-attachment: scroll; background-size: 16px 18px; background-position: 98% 50%; background-repeat: no-repeat;">
                </div>
            </div>
            <div class="control-group" data-reactid=".0.1.$/submit.1.1"><label class="control-label" for="author-input"
                                                                               data-reactid=".0.1.$/submit.1.1.0">Author</label>
                <div class="controls" data-reactid=".0.1.$/submit.1.1.1"><input type="text" name="author"
                                                                                id="author-input"
                                                                                placeholder="e.g. Tim Pope"
                                                                                data-reactid=".0.1.$/submit.1.1.1.0">
                </div>
            </div>
            <div class="control-group" data-reactid=".0.1.$/submit.1.2"><label class="control-label" for="github-input"
                                                                               data-reactid=".0.1.$/submit.1.2.0">GitHub
                    link (optional)</label>
                <div class="controls" data-reactid=".0.1.$/submit.1.2.1"><input type="text" name="github-link"
                                                                                id="github-input"
                                                                                placeholder="e.g. https://github.com/tpope/vim-fugitive"
                                                                                data-reactid=".0.1.$/submit.1.2.1.0">
                </div>
            </div>
            <div class="control-group" data-reactid=".0.1.$/submit.1.3"><label class="control-label" for="vimorg-input"
                                                                               data-reactid=".0.1.$/submit.1.3.0">Vim.org
                    link (optional)</label>
                <div class="controls" data-reactid=".0.1.$/submit.1.3.1"><input type="text" name="vimorg-link"
                                                                                id="vimorg-input"
                                                                                placeholder="e.g. http://www.vim.org/scripts/script.php?script_id=2975"
                                                                                data-reactid=".0.1.$/submit.1.3.1.0">
                </div>
            </div>
            <div class="control-group" data-reactid=".0.1.$/submit.1.4"><label class="control-label"
                                                                               for="category-input"
                                                                               data-reactid=".0.1.$/submit.1.4.0">Category</label>
                <div class="controls" data-reactid=".0.1.$/submit.1.4.1">
                    <div class="category-select" data-reactid=".0.1.$/submit.1.4.1.0"><a data-placement="left"
                                                                                         class="uncategorized category-link"
                                                                                         href="#"
                                                                                         data-reactid=".0.1.$/submit.1.4.1.0.0"
                                                                                         title=""
                                                                                         data-original-title="Plugins that have not yet been categorized"><i
                                    class="icon-question category-icon"
                                    data-reactid=".0.1.$/submit.1.4.1.0.0.0"></i><span
                                    data-reactid=".0.1.$/submit.1.4.1.0.0.1"> </span><span
                                    data-reactid=".0.1.$/submit.1.4.1.0.0.2">Uncategorized</span></a>
                        <div class="dropdown" data-reactid=".0.1.$/submit.1.4.1.0.1"><a class="dropdown-toggle"
                                                                                        data-toggle="dropdown"
                                                                                        data-target="#"
                                                                                        data-reactid=".0.1.$/submit.1.4.1.0.1.0"><i
                                        class="icon-edit" data-reactid=".0.1.$/submit.1.4.1.0.1.0.0"></i></a>
                            <ul class="dropdown-menu pull-right" data-reactid=".0.1.$/submit.1.4.1.0.1.1">
                                <li class="disabled" data-reactid=".0.1.$/submit.1.4.1.0.1.1.0"><a
                                            class="select-heading" data-reactid=".0.1.$/submit.1.4.1.0.1.1.0.0">Change
                                        category</a></li>
                                <li data-reactid=".0.1.$/submit.1.4.1.0.1.1.1:$_wrapped:0:$language"><a title=""
                                                                                                        data-placement="left"
                                                                                                        href="#"
                                                                                                        class="category-item"
                                                                                                        data-reactid=".0.1.$/submit.1.4.1.0.1.1.1:$_wrapped:0:$language.0"
                                                                                                        data-original-title="Plugins or syntax highlighting for a language or library"><i
                                                class="category-icon icon-flag"
                                                data-reactid=".0.1.$/submit.1.4.1.0.1.1.1:$_wrapped:0:$language.0.0"></i><span
                                                data-reactid=".0.1.$/submit.1.4.1.0.1.1.1:$_wrapped:0:$language.0.1">Language</span></a>
                                </li>
                                <li data-reactid=".0.1.$/submit.1.4.1.0.1.1.1:$_wrapped:0:$completion"><a title=""
                                                                                                          data-placement="left"
                                                                                                          href="#"
                                                                                                          class="category-item"
                                                                                                          data-reactid=".0.1.$/submit.1.4.1.0.1.1.1:$_wrapped:0:$completion.0"
                                                                                                          data-original-title="Plugins that reduce typing and complete code"><i
                                                class="category-icon icon-ellipsis-horizontal"
                                                data-reactid=".0.1.$/submit.1.4.1.0.1.1.1:$_wrapped:0:$completion.0.0"></i><span
                                                data-reactid=".0.1.$/submit.1.4.1.0.1.1.1:$_wrapped:0:$completion.0.1">Completion</span></a>
                                </li>
                                <li data-reactid=".0.1.$/submit.1.4.1.0.1.1.1:$_wrapped:0:$code-display"><a title=""
                                                                                                            data-placement="left"
                                                                                                            href="#"
                                                                                                            class="category-item"
                                                                                                            data-reactid=".0.1.$/submit.1.4.1.0.1.1.1:$_wrapped:0:$code-display.0"
                                                                                                            data-original-title="Plugins and color schemes that enhance code display"><i
                                                class="category-icon icon-code"
                                                data-reactid=".0.1.$/submit.1.4.1.0.1.1.1:$_wrapped:0:$code-display.0.0"></i><span
                                                data-reactid=".0.1.$/submit.1.4.1.0.1.1.1:$_wrapped:0:$code-display.0.1">Code display</span></a>
                                </li>
                                <li data-reactid=".0.1.$/submit.1.4.1.0.1.1.1:$_wrapped:0:$integration"><a title=""
                                                                                                           data-placement="left"
                                                                                                           href="#"
                                                                                                           class="category-item"
                                                                                                           data-reactid=".0.1.$/submit.1.4.1.0.1.1.1:$_wrapped:0:$integration.0"
                                                                                                           data-original-title="Plugins that integrate Vim with external tools or the OS"><i
                                                class="category-icon icon-external-link"
                                                data-reactid=".0.1.$/submit.1.4.1.0.1.1.1:$_wrapped:0:$integration.0.0"></i><span
                                                data-reactid=".0.1.$/submit.1.4.1.0.1.1.1:$_wrapped:0:$integration.0.1">Integrations</span></a>
                                </li>
                                <li data-reactid=".0.1.$/submit.1.4.1.0.1.1.1:$_wrapped:0:$interface"><a title=""
                                                                                                         data-placement="left"
                                                                                                         href="#"
                                                                                                         class="category-item"
                                                                                                         data-reactid=".0.1.$/submit.1.4.1.0.1.1.1:$_wrapped:0:$interface.0"
                                                                                                         data-original-title="Plugins that add or change a UI element"><i
                                                class="category-icon icon-eye-open"
                                                data-reactid=".0.1.$/submit.1.4.1.0.1.1.1:$_wrapped:0:$interface.0.0"></i><span
                                                data-reactid=".0.1.$/submit.1.4.1.0.1.1.1:$_wrapped:0:$interface.0.1">Interface</span></a>
                                </li>
                                <li data-reactid=".0.1.$/submit.1.4.1.0.1.1.1:$_wrapped:0:$command"><a title=""
                                                                                                       data-placement="left"
                                                                                                       href="#"
                                                                                                       class="category-item"
                                                                                                       data-reactid=".0.1.$/submit.1.4.1.0.1.1.1:$_wrapped:0:$command.0"
                                                                                                       data-original-title="Plugins that introduce or change a Vim command"><i
                                                class="category-icon icon-terminal"
                                                data-reactid=".0.1.$/submit.1.4.1.0.1.1.1:$_wrapped:0:$command.0.0"></i><span
                                                data-reactid=".0.1.$/submit.1.4.1.0.1.1.1:$_wrapped:0:$command.0.1">Commands</span></a>
                                </li>
                                <li data-reactid=".0.1.$/submit.1.4.1.0.1.1.1:$_wrapped:0:$other"><a title=""
                                                                                                     data-placement="left"
                                                                                                     href="#"
                                                                                                     class="category-item"
                                                                                                     data-reactid=".0.1.$/submit.1.4.1.0.1.1.1:$_wrapped:0:$other.0"
                                                                                                     data-original-title="Plugins that don't belong in other categories"><i
                                                class="category-icon icon-asterisk"
                                                data-reactid=".0.1.$/submit.1.4.1.0.1.1.1:$_wrapped:0:$other.0.0"></i><span
                                                data-reactid=".0.1.$/submit.1.4.1.0.1.1.1:$_wrapped:0:$other.0.1">Other</span></a>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
            <div class="control-group" data-reactid=".0.1.$/submit.1.5"><label class="control-label" for="tags-input"
                                                                               data-reactid=".0.1.$/submit.1.5.0">Tags
                    (up to four keywords for search)</label>
                <div class="controls" data-reactid=".0.1.$/submit.1.5.1">
                    <div class="tags-select editing" data-reactid=".0.1.$/submit.1.5.1.0"><h3 class="tags-label"
                                                                                              data-reactid=".0.1.$/submit.1.5.1.0.0">
                            Tags</h3>
                        <ul class="tags-list" data-reactid=".0.1.$/submit.1.5.1.0.1"></ul>
                        <input type="text" maxlength="12" class="tag-input" placeholder="Add tag"
                               data-reactid=".0.1.$/submit.1.5.1.0.2"></div>
                </div>
            </div>
            <div class="control-group" data-reactid=".0.1.$/submit.1.6">
                <div class="controls" data-reactid=".0.1.$/submit.1.6.0"><p class="other-info-blurb"
                                                                            data-reactid=".0.1.$/submit.1.6.0.0">All
                        other information, including descriptions, will be automatically extracted from the GitHub or
                        Vim.org link.</p></div>
            </div>
            <div class="control-group" data-reactid=".0.1.$/submit.1.7">
                <div class="controls" data-reactid=".0.1.$/submit.1.7.0">
                    <button type="submit" data-reactid=".0.1.$/submit.1.7.0.0"><span
                                data-reactid=".0.1.$/submit.1.7.0.0.0">Submit</span><span class="right-arrow"
                                                                                          data-reactid=".0.1.$/submit.1.7.0.0.1">→</span>
                    </button>
                </div>
            </div>
            <input type="hidden" name="category" value="uncategorized" data-reactid=".0.1.$/submit.1.8"><input
                    type="hidden" name="tags" value="[]" data-reactid=".0.1.$/submit.1.9"></form>
    </div>
@stop