function SolidList() {
	this.solidList = document.createElement("UL");

	this.add = function(a) {
		var addLi = new CreateLiAndAll(a);
		this.solidList.appendChild(addLi.listElement);
	}
}

function CreateLiAndAll (liText) {
	this.listElement = li();

	function li() {
		var newLi = document.createElement("LI");
		newLi.innerText = liText;
		newLi.appendChild(checkBox());
		newLi.appendChild(deleteButton());

		return newLi;
	} 

	function checkBox() {
		var cb = document.createElement("INPUT");
		cb.type = "checkbox";

		return cb;
	}

	function deleteButton() {
		var btn = document.createElement("BUTTON");
		btn.innerText = "DELETE";

		return btn;
	}
}

var list = new SolidList();
list.add("first");
list.add("second");

document.body.appendChild(list.solidList);