package dream.first.extjs.plugin.index.controller;

import java.util.Objects;

import javax.servlet.http.HttpServletRequest;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;

import dream.first.core.login.CurrentLoginUserInfo;
import dream.first.core.platform.org.model.Org;
import dream.first.core.platform.user.model.User;
import dream.first.extjs.controller.BaseExtJSController;

@Controller
public class IndexController extends BaseExtJSController {

	@RequestMapping(value = "index")
	public String index() {
		CurrentLoginUserInfo loginUserInfo = getCurrentLoginUserInfo();
		Objects.requireNonNull(loginUserInfo);
		User user = loginUserInfo.getUser();
		HttpServletRequest request = getRequest();
		request.setAttribute("isSuper", user.getIsSuper());
		request.setAttribute("loginUserId", user.getId());
		request.setAttribute("loginUsername", user.getUsername());
		request.setAttribute("loginUserRealName", user.getRealName());
		Org org = loginUserInfo.getOrg();
		if (null != org) {
			request.setAttribute("orgName", org.getOrgName());
		}
		return "index/index.jsp";
	}

	@RequestMapping(value = "indexTab")
	public String indexTab() {
		return "index/indexTab.jsp";
	}

}
