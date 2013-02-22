PResize
=======
Percentage resize plugin for jQuery

If you want make a responsive website, it's help for you. This plugin check all numeric style attribute of selected item and resize that by given percentage.

###USAGE
```javascript
$(selector).presize({percent:0.5});
```

---------------------------------------

###SETTINGS
<table>
  <tr>
    <th>Attribute</th>
    <th>Type</th>
    <th>Default</th>
    <th>Description</th>
  </tr>
  <tr>
    <td>percent</td>
    <td>float</td>
    <td>1</td>
    <td>Resize rate by percent. (1 = 100%, 0.5 = 50%)</td>
  </tr>
  <tr>
    <td>check</td>
    <td>string</td>
    <td>"width,height,top,left,bottom,right,margin-left,margin-top"</td>
    <td>Checked style attributes</td>
  </tr>
  <tr>
    <td>add</td>
    <td>string</td>
    <td>NONE</td>
    <td>Add checked style attribute to the default checks</td>
  </tr>
  <tr>
    <td>exc</td>
    <td>string</td>
    <td>NONE</td>
    <td>Set the excepted style attributes</td>
  </tr>
</table>

---------------------------------------

##EXAMPLE

Firts step. We create an item, which becomes the base for the percentage calculating.
```html
<div id='alap'></div>
```

Second step, in css we set up 2 importatn settings:
```css
#alap {
	width: 100%;
	max-width: 1000px;
}
```
This setting allows the element to resize only if max-width is smaller than the screen size.

Third step. We put the html element to the code :) For example:
```html
<div id='alap'>
  <div id='resizable_item'></div>
</div>
```

Final step. Set up js script
```javascript
$.presize_base = "#alap";

function resize(){
  $("#resizable_item").presize({exc:"left",add:'font-size'});
}

$(document).ready(){
  resize();
}

$(window).resize(){
  resize();
}
```

The $.presize_base count the current changes by the **'#alap'** item. If the '#alap' item is smaller than the predefined max-width than the percent value is changing.

---------------------------------------

###DEMO

http://jsfiddle.net/pingmedia/pJVuG/16/embedded/result/
