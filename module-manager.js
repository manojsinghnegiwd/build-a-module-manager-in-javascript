var Manager = (
	function Manager() {

		var modules = {
			dummy: function(name) {
				console.log("Hello My name is " + name)
			}
		};

		function require(module_name) {
			return modules[module_name];
		}

		return {
			require: require
		}
	}
)();

var dummy = Manager.require("dummy");

dummy("Manoj");