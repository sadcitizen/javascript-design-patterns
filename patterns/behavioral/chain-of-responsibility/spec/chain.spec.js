describe('Цепочка обязаностей / Chain of Responsibility', function () {

    var todos;

    describe('Инстанс', function () {

        beforeEach(function () {
            todos = new TodoList();
        });

        it('TodoList', function () {
            expect(todos).to.be.instanceOf(TodoList);
        });

        it('Методы', function () {
            expect(todos.add).to.be.a('function');
            expect(todos.edit).to.be.a('function');
            expect(todos.remove).to.be.a('function');
            expect(todos.clean).to.be.a('function');
            expect(todos.get).to.be.a('function');
        });
    });

    describe('Поведение', function () {

        beforeEach(function () {
            todos = new TodoList();
        });

        it('TodoList.add', function () {
            expect(todos.add('Первая запись', 'Текст первой записи')).to.equal(todos);
        });

        it('TodoList.get', function () {
            todos.add('Запись', 'Текст записи');

            expect(todos.get('Запись')).to.equal('Текст записи');
            expect(todos.get('Несуществующая запись')).to.be.undefined;
        });

        it('TodoList.edit', function () {
            todos.add('Запись', 'Текст записи');

            expect(todos.edit('Запись', 'Отредактированный текст записи')).to.equal(todos);
            expect(todos.get('Запись')).to.equal('Отредактированный текст записи');
        });

        it('TodoList.remove', function () {
            todos.add('Запись', 'Текст записи');

            expect(todos.remove('Запись')).to.equal(todos);
            expect(todos.get('Запись')).to.be.undefined;
        });


        it('TodoList.clean', function () {
            todos
                .add('Первая запись', 'Текст первой записи')
                .add('Вторая запись', 'Текст второй записи')
                .add('Третья запись', 'Текст третьей записи')
                .add('Четвертая запись', 'Текст четвертой записи');

            expect(todos.clean()).to.equal(todos);
            expect(todos.get('Первая запись')).to.be.undefined;
            expect(todos.get('Вторая запись')).to.be.undefined;
            expect(todos.get('Третья запись')).to.be.undefined;
            expect(todos.get('Четвертая запись')).to.be.undefined;
        });
    });

});