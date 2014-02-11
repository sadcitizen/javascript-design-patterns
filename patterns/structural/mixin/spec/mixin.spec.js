describe('Примесь / Mixin', function () {

    var literalBook, functionalBook;

    before(function () {
        literalBook = new BookLiteral('Альбер Камю', 'Чума');
        functionalBook = new BookFunctional('Герберт Уэлсс', 'Война миров');
    });

    describe('Инстанс', function () {

        it('BookLiteral', function () {
            expect(literalBook).to.be.an('object');
            expect(literalBook).to.be.instanceOf(BookLiteral);
            expect(literalBook.getInfo).to.be.a('function');
        });

        it('BookFunctional', function () {
            expect(functionalBook).to.be.an('object');
            expect(functionalBook).to.be.instanceOf(BookFunctional);
            expect(functionalBook.getInfo).to.be.a('function');
        });

        it('BookLiteralMixin', function () {
            expect(BookLiteralMixin).to.be.an('object');
            expect(BookLiteralMixin.getAuthor).to.be.a('function');
            expect(BookLiteralMixin.getTitle).to.be.a('function');
        });

        it('BookFunctionalMixin', function () {
            expect(BookFunctionalMixin).to.be.an('function');
        });

    });

    describe('Поведение', function () {

        describe('Примесь - литерал', function () {

            it('Объект без примеси', function () {
                expect(literalBook.getAuthor).to.be.undefined;
                expect(literalBook.getTitle).to.be.undefined;
            });

            it('Объект с примесью', function () {
                _.extend(BookLiteral.prototype, BookLiteralMixin);
                literalBook = new BookLiteral('Альбер Камю', 'Чума');

                expect(literalBook.getAuthor).to.be.a('function');
                expect(literalBook.getAuthor()).to.equal('Альбер Камю');
                expect(literalBook.getTitle).to.be.a('function');
                expect(literalBook.getTitle()).to.equal('Чума');
            });

        });

        describe('Примесь - функция', function () {

            it('Объект без примеси', function () {
                expect(functionalBook.getAuthor).to.be.undefined;
                expect(functionalBook.getTitle).to.be.undefined;
            });

            it('Объект с примесью', function () {
                BookFunctionalMixin.call(BookFunctional.prototype);
                functionalBook = new BookFunctional('Герберт Уэлсс', 'Война миров');

                expect(functionalBook.getAuthor).to.be.a('function');
                expect(functionalBook.getAuthor()).to.equal('Герберт Уэлсс');
                expect(functionalBook.getTitle).to.be.a('function');
                expect(functionalBook.getTitle()).to.equal('Война миров');
            });
        });
    });
});
