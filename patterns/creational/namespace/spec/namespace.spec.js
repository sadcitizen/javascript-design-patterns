describe('Пространство имен / Namespace', function () {

    describe('Инстанс', function () {

        it('Namespace', function () {
            expect(Namespace).to.be.a('object');
        });

        it('Методы', function () {
            expect(Namespace.create).to.exist;
            expect(Namespace.create).to.be.a('function');
        });
    });

    describe('Поведение', function () {

        it('Создание неймспейсов', function () {
            var App = App || {};

            expect(Namespace.create(App, 'modules.login')).to.equal(App.modules.login);
            expect(Namespace.create(App.modules, 'logout')).to.equal(App.modules.logout);
            expect(Namespace.create(App, 'modules')).to.equal(App.modules);
            expect(Namespace.create(App.modules.logout, 'success', {})).to.equal(App.modules.logout.success);
            expect(Namespace.create(App, 'modules.logout.fail', {})).to.equal(App.modules.logout.fail);
        });

        it('Создание неймспейсов с объектом', function () {
            var AnotherApp = AnotherApp || {};

            expect(Namespace.create(AnotherApp, 'modules.login', { foo: 'bar' })).to.equal(AnotherApp.modules.login);
            expect(AnotherApp.modules.login).to.have.property('foo');
        });

        it('Создание неймспейсов с функциями-фабриками', function () {
            var FnApp = FnApp || {};

            expect(Namespace.create(FnApp, 'entities.user', function () {
                function User(name) {
                    this._name = name;
                }

                User.prototype.introduce = function () {
                    return 'Привет, меня зовут ' + this._name;
                };

                return User;
            })).to.equal(FnApp.entities.user);

            var user = new FnApp.entities.user('Козьма Прутков');

            expect(user).to.be.instanceOf(FnApp.entities.user);
            expect(user.introduce).to.be.a('function');
            expect(user.introduce()).to.equal('Привет, меня зовут Козьма Прутков');
        });

    });
});