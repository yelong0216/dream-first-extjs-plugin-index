package dream.first.extjs.plugin.index.controller;

import java.io.IOException;
import java.util.Objects;

import javax.servlet.http.HttpServletRequest;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseBody;
import org.yelong.support.servlet.resource.response.ResourceResponseException;
import org.yelong.support.spring.mvc.HandlerResponseWay;
import org.yelong.support.spring.mvc.ResponseWay;

import dream.first.base.platform.org.model.BaseOrg;
import dream.first.base.platform.user.model.BaseUser;
import dream.first.base.userauth.CurrentAuthUserInfo;
import dream.first.extjs.base.controller.DFBaseExtJSController;
import dream.first.extjs.plugin.index.ExtJSPluginIndex;

@Controller
public class Index2Controller extends DFBaseExtJSController {

	@SuppressWarnings("rawtypes")
	@ResponseBody
	@RequestMapping(value = "index")
	@ResponseWay(HandlerResponseWay.MODEL_AND_VIEW)
	public void index() throws ResourceResponseException, IOException {
		CurrentAuthUserInfo loginUserInfo = getCurrentLoginUserInfo();
		Objects.requireNonNull(loginUserInfo);
		BaseUser user = loginUserInfo.getUser();
		HttpServletRequest request = getRequest();
		request.setAttribute("isSuper", user.getIsSuper());
		request.setAttribute("loginUserId", user.getId());
		request.setAttribute("loginUsername", user.getUsername());
		request.setAttribute("loginUserRealName", user.getRealName());
		BaseOrg org = loginUserInfo.getOrg();
		if (null != org) {
			request.setAttribute("orgName", org.getOrgName());
		}
		responseHtml(ExtJSPluginIndex.RESOURCE_PRIVATES_PACKAGE, ExtJSPluginIndex.RESOURCE_PREFIX + "/html/index.html");
	}

	@ResponseBody
	@RequestMapping(value = "indexTab")
	@ResponseWay(HandlerResponseWay.MODEL_AND_VIEW)
	public void indexTab() throws ResourceResponseException, IOException {
		responseHtml(ExtJSPluginIndex.RESOURCE_PRIVATES_PACKAGE, ExtJSPluginIndex.RESOURCE_PREFIX + "/html/indexTab.html");
	}

}
