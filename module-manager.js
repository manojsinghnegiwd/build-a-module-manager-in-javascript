var Manager = (
	function Manager() {

		var modules = {};

		function require(module_name) {
			return modules[module_name];
		}

		function define(module_name, dependencies, defination) {
			for (var i = 0; i < dependencies.length; i++) {
				dependencies[i] = modules[dependencies[i]];
			}
			modules[module_name] = defination.apply(defination, dependencies);
		}

		return {
			require: require,
			define: define
		}
	}
)();

Manager.define("output", [], function(){
	function write (name) {
		console.log(name);
	}

	return {
		write: write
	}
});

var output = Manager.require("output");

output.write("Manoj");