AppController.$inject = [
  "AppService"
];

export function AppController(
  AppService
) {

  var vm = this;
  vm.message = AppService.message;
}
