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
	function write (data) {
		console.log(data);
	}

	return {
		write: write
	}
});

Manager.define("calculate", ["output"], function(output) {

	function add () {
		var total = 0;
		for(var i = 0; i < arguments.length; i++) {
			total += arguments[i];
		}
		output.write(total);
	}

	return {
		add: add
	}

})

var calculate = Manager.require("calculate")

calculate.add(3, 4, 5, 6);