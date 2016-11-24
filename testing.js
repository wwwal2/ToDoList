//method creating
function MethodCreate() {
	this.saySay = function(a) {
		alert(a);
	}
	this.staticAlert = alert("hi");
}

var doIt = new MethodCreate();
doIt.saySay("Hello");
doIt.staticAlert;