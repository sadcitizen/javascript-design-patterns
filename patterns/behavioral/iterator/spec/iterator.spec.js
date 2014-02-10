describe('Итератор / Iterator или Курсор / Cursor', function () {

    var iterated, arr, sum;

    before(function () {
        arr = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
        iterated = new Iterator(arr);
        sum = 0;
    });

    describe('Проверка объекта', function () {

        it("Инстанс", function () {
            expect(iterated).to.be.an.instanceOf(Iterator);
        });

        it('Методы', function () {
            expect(iterated.current).to.be.a('function');
            expect(iterated.first).to.be.a('function');
            expect(iterated.last).to.be.a('function');
            expect(iterated.next).to.be.a('function');
            expect(iterated.previous).to.be.a('function');
            expect(iterated.reset).to.be.a('function');
            expect(iterated.hasNext).to.be.a('function');
            expect(iterated.hasPrevious).to.be.a('function');
            expect(iterated.each).to.be.a('function');
        });
    });

    describe('Работа методов', function () {
        it('Текущий элемент', function () {
            expect(iterated.current()).to.equal(0);
        });

        it("Следующий элемент", function () {
            expect(iterated.next()).to.equal(1);
        });

        it("Последний элемент", function () {
            expect(iterated.last()).to.equal(9);
        });

        it("Предыдущий элемент", function () {
            expect(iterated.previous()).to.equal(8);
        });

        it("Проход по всем элементам", function () {
            iterated.reset();

            iterated.each(function (item) {
                sum += item;
            });

            expect(sum).to.equal(45);
        });

        it("Есть ли следующий элемент", function () {
            iterated.first();

            expect(iterated.hasNext()).to.be.true;
        });

        it("Есть ли предыдущий элемент", function () {
            iterated.last();

            expect(iterated.hasPrevious()).to.be.true;
        });

        it("Сброс курсора", function () {
            iterated.reset();

            expect(iterated.current()).to.equal(0);
        });

        it("Выход из диапазона справа", function () {
            iterated.last();

            expect(iterated.next()).to.be.undefined;
        });

        it("Выход из диапазона слева", function () {
            iterated.first();

            expect(iterated.previous()).to.be.undefined;
        });
    });
});