var configurations = {
  audible : { 
    rx: /^http.*?\.audible\.com.*?\/pd\/.*/i,
    params: [
      { param: "source_code", paramValue: "COMA0230WS012110" },
      { param: "AID", paramValue: "10298646" },
      { param: "PID", paramValue: "4897915" }
    ]
  },
  mint : { 
    rx: /^http.*?\.mint\.com/i, 
    params: [
      { param: "PID", paramValue: "4897915" },
      { param: "priorityCode", paramValue: "4216102399" },
      { param: "source", paramValue: "cj_pfm" }
    ]
  },
  thinkgeek : { 
    rx: /^http.*?\.thinkgeek\.com\/product\//i, 
    params: [
      { param: "cpg", paramValue: "cj" },
      { param: "ref", paramValue: "" },
      { param: "CJURL", paramValue: "" },
      { param: "CJID", paramValue: "3282554"}
    ]
  },
  neweggcom : {
    rx: /^http.*?\.newegg\.com.*?(product.product\.aspx\?item=|special.shellshocker\.aspx\?)/i,
    params: [
      { param: "nm_mc", paramValue: "AFC-C8Junction" },
      { param: "cm_mmc", paramValue: "AFC-C8Junction-_-Branding-_-na-_-na" },
      { param: "AID", paramValue: "10440554" },
      { param: "PID", paramValue: "4897915" }
    ]
  },
  neweggca : {
    rx: /^http.*?\.newegg\.ca.*?\/(product.product\.aspx\?item=|special.shellshocker\.aspx\?)/i,
    params: [
      { param: "nm_mc", paramValue: "AFC-C8junctionCA" },
      { param: "cm_mmc", paramValue: "AFC-C8JunctionCA-_-homepage-_-na-_-na" },
      { param: "AID", paramValue: "10606701" },
      { param: "PID", paramValue: "4897915" }
    ]
  },
  woot : {
    rx: /^http.*?\.woot\.com.*?\/offers\/.*/i,
    params: [
      { param: "utm_campaign", paramValue: "Commission+Junction+-+10848750" },
      { param: "utm_source", paramValue: "Commission+Junction+Publisher+-+4897915" },
      { param: "utm_medium", paramValue: "affiliate+-+Woot%21+Logo" }
    ]
  },
  guitarcenter : {
    rx: /^http.*?\.guitarcenter\.com\/.*[a-z0-9]{9}-i[a-z0-9]{7}\.gc/i, 
    params: [
      { param: "CJAID", paramValue: "10453836" },
      { param: "CJPID", paramValue: "4897915" }
    ]
  }
};

var url = window.location.href;
for( var configVariable in configurations ) {
  if( configurations.hasOwnProperty(configVariable) ) {
	//Be grateful and do not steel other affiliate links & further avoid circular redirection
	var config = configurations[configVariable];
	if(url.match(config.rx) && url.indexOf(config.params[0].param) == -1) {
	  if(url.indexOf("?") == -1) {
		url = url + "?" + createTag(config.params);
	  } else {
	    url = url + "&" + createTag(config.params);
	  }
	  window.location.href=url;
	}
  }
}

function createTag( parameters ) {
	var result = "";
	for( var i = 0; i < parameters.length; i++ ) {
		result = result + parameters[i].param + "=" + parameters[i].paramValue;
		if( i >= 0 && i < parameters.length - 1 ) {
			result = result + "&";
		}
	}
	return result;
}
