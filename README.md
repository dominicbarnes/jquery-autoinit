jQuery Automatic Plugin Initialization
--------------------------------------

What?
=====

Takes your data-auto-plugin attributes on your DOM elements, and automatically rigs up
trivial jQuery plugins, passing the properties you define on the element itself.

This is **not** meant to be used for complex initializing, where there are JS callbacks
and the like involved. Nor is this good if you want to "batch" init a plugin (with the same config)
on many elements.

This plugin leverages the automatic parsing of data-* attributes that jQuery handles via it's `.data()`
method. To simply init a plugin with no options, just use `true` as the full value, otherwise
you need to make sure you use valid **JSON**, including `"` around your property names.

My examples are primarily with jQuery UI Widgets, but anything in the `jQuery.fn` namespace is fair game.
However, it is limited in that it can only take 1 object/hash argument, which is the typical patterns
for jQuery plugins, but not required by any means.

Usage
=====

    <!-- To apply to a select group of elements -->
    $(".auto").autoInit();

    <!-- Or to apply to all elements on the page (ie: $("*")) -->
    $.autoInit();

    <!-- $("#test-dialog").dialog({
            "autoOpen": false,
            "draggable": false,
            "position": "top"
        }); -->
    <div id="test-dialog" class="auto" title="My Dialog" data-auto-dialog='{ "autoOpen": false, "draggable": false, "position": "top" }'>
        <h2>My Cool Dialog</h2>
        <p>Some cool content</p>
    </div>

    <!-- $("#test-button").button({ disabled: true }); -->
    <button id="test-button" class="auto" data-auto-button='{ "disabled": true }'>My Disabled Button</button>

    <!-- $("#test-accordion").accordion(); -->
    <div id="test-accordion" class="auto" data-auto-accordion="true">
        <h3><a href="#">Pane 1</a></h3>
        <div>Pane 1 Content ...</div>
        <h3><a href="#">Pane 2</a></h3>
        <div>Pane 2 Content ...</div>
        <h3><a href="#">Pane 3</a></h3>
        <div>Pane 3 Content ...</div>
        <h3><a href="#">Pane 4</a></h3>
        <div>Pane 4 Content ...</div>
    </div>
