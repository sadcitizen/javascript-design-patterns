describe('Прототип / Prototype', function () {

    var john, johnProto;

    before(function () {
        john = new Person('John', 'Doe');
        johnProto = new Proto(john);
    });

    describe('Классы', function () {

        it('Person является классом', function () {
            expect(Person).to.be.a('function');
            expect(john).to.be.an.instanceOf(Person);
        });

        it('Экземпляр класса Person имеет метод introduce()', function() {
            expect(john.introduce).to.be.a('function');
            expect(john.introduce()).to.equal('My name is John Doe');
        });

        it('Proto является классом', function () {
            expect(Proto).to.be.a('function');
            expect(johnProto).to.be.an.instanceOf(Proto);
        });

        it('Экземпляр класса Proto имеет метод clone()', function() {
            expect(johnProto.clone).to.be.a('function');
        });

    });

    describe('Поведение', function () {

        var johnClone, johnAnotherClone;

        before(function () {
            johnClone = johnProto.clone();
            johnAnotherClone = johnProto.clone();
        });

        it('Метод .clone() возвращает объект', function () {
            expect(johnClone).to.be.an('object');
        });

        it('Возвращаемые методом .clone() объекты должны быть копиями экземпляра класса Person', function () {
            expect(john.introduce() === johnClone.introduce()).to.be.true;
        });

        it('Копии не должны быть одним и тем же объектом', function () {
            expect(john === johnClone).to.be.false;
            expect(john === johnAnotherClone).to.be.false;
            expect(johnAnotherClone === johnClone).to.be.false;
        });
    });

});