var Manager = (
	function Manager() {

		var modules = {
			dummy: function(name) {
				console.log("Hello My name is " + name)
			}
		};

		return modules;
	}
)();

Manager.dummy('Manoj');