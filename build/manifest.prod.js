{
	"name": "Cyphor",
	"description": "Bringing seamless information privacy to all your messaging applications",
	"version": "0.0.0.1",
	"manifest_version": 2,

	"icons": {
		"128": "/public/img/cyphor_logo_transp_48.png"
	},
	"background": {
		"persistent": true,
		"scripts": [
			"background.js"
		]
	},
	"content_scripts": [
		{
			"matches": ["http://*/*", "https://*/*"],
			"js": [
				"content.js"
			],
			"run_at": "document_start"
		}
	],
	"permissions": [
		"tabs", "http://*/*", "activeTab", "storage", "debugger"
	],
	"web_accessible_resources": [
		"/iframe/div.iframe.html",
		"/iframe/button.iframe.html",
		"/injectables/EventInterceptor.injectable.js"
	],
	"browser_action": {
		"default_title": "Cyphor",
		"default_popup": "public/index.html"
	}
}
