package dream.first.extjs.plugin.index.configuration;

import org.springframework.context.annotation.Bean;

import dream.first.extjs.plugin.index.controller.IndexController;

public class ExtJSPluginIndexConfiguration {

	@Bean
	public IndexController indexController() {
		return new IndexController();
	}

}
