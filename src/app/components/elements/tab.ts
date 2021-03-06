import { Component, View } from "angular2/core";
import { SEMANTIC_COMPONENTS, SEMANTIC_DIRECTIVES } from "ng-semantic/semantic";

@Component({
	selector : "tab",
})
@View({
	directives: [SEMANTIC_COMPONENTS, SEMANTIC_DIRECTIVES],
	template : `
	<div class="ui masthead vertical segment">
    <div class="ui container">
        <h1>Tab</h1>
        <p>Semantic UI tab module <i class="icon external"></i> 
        <a href="http://semantic-ui.com/modules/tab.html" target="_blank">Semantic UI Tab</a></p>
    </div>
</div>
<div class="main ui container">
    <h4 class="ui header">Demo</h4>
    <sm-tabs>
          <sm-tab title="Hello" class="ui tab bottom attached segment active" data-tab="first">Lorem ipsum dolor sit amet, 
          consectetur adipiscing elit. 
          Mauris vehicula eros lacus, maximus accumsan sem dignissim et. Lorem ipsum dolor sit amet, 
          consectetur adipiscing elit. 
          Cras non elementum lectus. Sed pretium vulputate quam in laoreet. Nunc molestie id erat in mollis. 
          Integer sit amet dignissim tortor. 
          Donec non ultrices augue. Aenean posuere et justo ut tempor. Fusce sagittis viverra euismod.
</sm-tab>
          <sm-tab title="About" class="ui tab bottom attached segment" data-tab="second">Suspendisse vehicula, lorem in maximus vehicula, 
          massa leo viverra purus, ac blandit nulla orci eget eros. Integer at est dapibus, molestie justo non, accumsan est. 
          In dictum consequat pharetra. 
          Cras ultricies elit nec auctor volutpat. In nibh justo, fringilla non tellus ac, imperdiet iaculis diam. 
          Cras maximus ex urna, sit amet elementum eros aliquam volutpat. Ut nec commodo neque. Mauris euismod, leo eu iaculis 
          vestibulum, massa nibh eleifend ante, eu interdum lacus arcu sit amet dui. Fusce tincidunt semper justo et feugiat. 
          Mauris turpis mi, dignissim quis turpis vel, molestie aliquet augue. Curabitur finibus nibh vitae lobortis lacinia. 
          Curabitur molestie porta mauris at elementum. Nunc dignissim pharetra ligula non elementum. 
          Praesent gravida porta nunc et venenatis. 
          Curabitur malesuada arcu non risus aliquet, vitae pulvinar metus luctus. Nulla fermentum, 
          elit a pellentesque aliquet, metus felis mollis enim, et pulvinar orci massa in est.
</sm-tab>
      </sm-tabs>
    
    <h4 class="ui header">Code</h4>
 <div class="ui form">
        <div class="field">
<textarea rows="6" readonly class="code" autocomplete="off" autocorrect="off" autocapitalize="off" spellcheck="false">
<sm-tabs>
  <sm-tab title="Hello" class="ui tab bottom attached segment active" data-tab="first">text...</sm-tab>
  <sm-tab title="About" class="ui tab bottom attached segment" data-tab="second">text..</sm-tab>
</sm-tabs>
</textarea>
        </div>
      </div>
</div>
`
})

export class TabComponent {}
