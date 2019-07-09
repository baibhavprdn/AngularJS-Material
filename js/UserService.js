(function () {
	angular.module('userService', userService);

	function userService($q) {
		var users = [{
				'name': 'Lia Lugo',
				'avatar': 'svg-1',
				'content': 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores ea expedita repudiandae optio, magnam non vitae nemo quidem obcaecati ut commodi consequatur aut nam sequi quo illo iusto maiores magni?'
			},
			{
				'name': 'George Duke',
				'avatar': 'svg-2',
				'content': 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores ea expedita repudiandae optio, magnam non vitae nemo quidem obcaecati ut commodi consequatur aut nam sequi quo illo iusto maiores magni?'
			},
			{
				'name': 'Gener Daenako',
				'avatar': 'svg-3',
				'content': 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores ea expedita repudiandae optio, magnam non vitae nemo quidem obcaecati ut commodi consequatur aut nam sequi quo illo iusto maiores magni'
			}
		];
	}
})();