PResize
=======
Percentage resize plugin for jQuery

If you want make a responsive website, it's help for you. This plugin check all numeric style attribute of selected item and resize that by given percentage.

###USAGE
<pre><code>$(selector).presize({percent:0.5});</code></pre>

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
    <td>width,height,top,left,bottom,right,margin-left,margin-top</td>
    <td>Checked style attributes</td>
  </tr>
  <tr>
    <td>add</td>
    <td>string</td>
    <td></td>
    <td>Add checked style attribute to the default checks</td>
  </tr>
  <tr>
    <td>exc</td>
    <td>string</td>
    <td></td>
    <td>Set the excepted style attributes</td>
  </tr>
</table>

---------------------------------------

###TIPS

For the fully responsive view, you should be put this to the window resize method. For example: 

<pre>
  <code>
    $(window).resize(function () {
        $.presize_base = "#alap";
        $("#item").presize();
    });
  </code>
</pre>

The $.presize_base count the current changes by the **'#alap'** item. If the '#alap' item is smaller than the predefined max-width than the percent value is changing.

---------------------------------------

###DEMO

http://jsfiddle.net/pingmedia/pJVuG/16/embedded/result/
