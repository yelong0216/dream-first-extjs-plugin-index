package dream.first.extjs.plugin.index.servlet;

import org.yelong.support.servlet.resource.ResourceServlet;
import org.yelong.support.servlet.resource.response.ResourceResponseHandler;
import org.yelong.support.spring.boot.servlet.resource.ResourceServletRegistrationBean;

import dream.first.extjs.plugin.index.servlet.IndexResourceServletRegistrationBean.IndexResourceServlet;

public class IndexResourceServletRegistrationBean extends ResourceServletRegistrationBean<IndexResourceServlet> {

	public static final String urlPrefix = "/resources/extjs/plugin/index";

	public static final String resourceRootPath = "/dream/first/extjs/plugin/resources/index/publics/extjs/plugin/index";

	public IndexResourceServletRegistrationBean() {
		this(urlPrefix);
	}

	public IndexResourceServletRegistrationBean(String urlPrefix) {
		this(urlPrefix, resourceRootPath);
	}

	public IndexResourceServletRegistrationBean(String urlPrefix, String resourceRootPath) {
		super(urlPrefix, resourceRootPath, new IndexResourceServlet());
	}

	public static final class IndexResourceServlet extends ResourceServlet {

		private static final long serialVersionUID = -454745587938652439L;

		public IndexResourceServlet() {
		}

		public IndexResourceServlet(ResourceResponseHandler resourceResponseHandler) {
			super(resourceResponseHandler);
		}

	}

}
