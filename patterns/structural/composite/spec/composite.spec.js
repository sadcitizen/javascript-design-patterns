describe('Компоновщик / Composite', function () {

    describe('Инстанс', function () {

        var branch, leaf;

        before(function () {
            branch = new Branch('Меню');
            leaf = new Leaf('Пункт меню');
        });

        it('Branch', function () {
            expect(Branch).to.be.a('function');
            expect(branch).to.be.an.instanceOf(Branch);

            expect(branch.getName).to.be.a('function');
            expect(branch.getName()).to.equal('Меню');
        });

        it('Leaf', function() {
            expect(Leaf).to.be.a('function');
            expect(leaf).to.be.an.instanceOf(Leaf);

            expect(leaf.getName).to.be.a('function');
            expect(leaf.getName()).to.equal('Пункт меню');
        });

    });

    describe('Поведение', function () {

    });

});