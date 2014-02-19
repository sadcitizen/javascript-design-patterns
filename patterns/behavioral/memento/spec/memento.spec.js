describe('Хранитель / Memento', function () {

    var person, caretaker, mem;

    describe('Классы', function (){

        before(function () {
            person = new Person('John', 'Moscow');
            caretaker = new Caretaker();
            mem = new Memento({hello: 'world'});
        });

        it('Person является классом', function () {
            expect(Person).to.be.a('function');
            expect(person).to.be.an.instanceOf(Person);
        });

        it('Экземпляр класса Person имеет метод move()', function() {
            expect(person.move).to.be.a('function');
        });

        it('Экземпляр класса Person имеет метод whereami()', function() {
            expect(person.whereami).to.be.a('function');
            expect(person.whereami()).to.equal('Moscow');
        });

        it('Экземпляр класса Person имеет метод save()', function() {
            expect(person.save).to.be.a('function');
            expect(person.save()).to.be.an.instanceOf(Memento);
        });

        it('Экземпляр класса Person имеет метод restore()', function() {
            var save = person.save();
            person.move('Tokyo');
            person.restore(save);

            expect(person.restore).to.be.a('function');
            expect(person.whereami()).to.equal('Moscow');
        });

        it('Memento является классом', function () {
            expect(Memento).to.be.a('function');
            expect(mem).to.be.an.instanceOf(Memento);
        });

        it('Экземпляр класса Memento имеет метод getState()', function() {
            expect(mem.getState).to.be.a('function');
            expect(mem.getState()).to.equal('{"hello":"world"}');
        });

        it('Caretaker является классом', function () {
            expect(Caretaker).to.be.a('function');
            expect(caretaker).to.be.an.instanceOf(Caretaker);
        });

        it('Экземпляр класса Memento имеет метод set()', function() {
            expect(caretaker.set).to.be.a('function');
        });

        it('Экземпляр класса Memento имеет метод get()', function() {
            expect(caretaker.get).to.be.a('function');
        });

        it('Экземпляр класса Memento имеет метод clean()', function() {
            expect(caretaker.clean).to.be.a('function');
        });
    });

    describe('Поведение', function () {

        beforeEach(function () {
            person = new Person('John', 'Moscow');
            caretaker = new Caretaker();
        });

        it('Сохраненное и восстановленное состояния должны быть идентичными', function () {
            var oldAddress = person.whereami();

            caretaker.set(person.save());
            person.restore(caretaker.get(0));

            var newAddress = person.whereami();

            expect(oldAddress === newAddress).to.be.true;
        });

        it('Множественное сохранение состояний', function () {

            caretaker.set(person.save());

            person.move('New York');
            caretaker.set(person.save());

            person.move('Tokyo');
            caretaker.set(person.save());

            person.move('London');
            caretaker.set(person.save());

            person.move('Paris');
            caretaker.set(person.save());



            person.restore(caretaker.get(0));
            expect(person.whereami()).to.equal('Moscow');

            person.restore(caretaker.get(1));
            expect(person.whereami()).to.equal('New York');

            person.restore(caretaker.get(2));
            expect(person.whereami()).to.equal('Tokyo');

            person.restore(caretaker.get(3));
            expect(person.whereami()).to.equal('London');

            person.restore(caretaker.get());
            expect(person.whereami()).to.equal('Paris');

        });

    });

});
