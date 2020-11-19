package dream.first.extjs.plugin.index.configuration;

import org.springframework.boot.autoconfigure.condition.ConditionalOnMissingBean;
import org.springframework.context.annotation.Bean;

import dream.first.extjs.plugin.index.controller.Index2Controller;
import dream.first.extjs.plugin.index.controller.IndexController;
import dream.first.extjs.plugin.index.servlet.IndexResourceServletRegistrationBean;

public class ExtJSPluginIndexConfiguration {

	@Bean
	@ConditionalOnMissingBean({ IndexController.class, Index2Controller.class })
	public Index2Controller index2Controller() {
		return new Index2Controller();
	}

	@Bean
	@ConditionalOnMissingBean
	public IndexResourceServletRegistrationBean indexResourceServletRegistrationBean() {
		return new IndexResourceServletRegistrationBean();
	}

}
