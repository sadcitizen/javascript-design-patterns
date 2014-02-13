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
            expect(branch.addChild).to.be.a('function');
            expect(branch.removeChild).to.be.a('function');
            expect(branch.getChild).to.be.a('function');
            expect(branch.hasChild).to.be.a('function');
            expect(branch.hasChildren).to.be.a('function');
            expect(branch.getChildrenCount).to.be.a('function');
            expect(branch.print).to.be.a('function');

        });

        it('Leaf', function() {
            expect(Leaf).to.be.a('function');
            expect(leaf).to.be.an.instanceOf(Leaf);

            expect(leaf.getName).to.be.a('function');
        });

    });

    describe('Поведение', function () {

        var menu, subMenu, leaf;

        beforeEach(function () {
            menu = new Branch('Меню ресторана');
            subMenu = new Branch('Винная карта');
            leaf = new Leaf('Вермут');
        });

        it('addChild', function() {
            expect(menu.getChildrenCount()).to.equal(0);
            menu.addChild(new Branch('Алкоголь'));
            expect(menu.getChildrenCount()).to.equal(1);
        });

        it('removeChild', function() {
            expect(menu.hasChildren()).to.be.false;
            menu.addChild(subMenu);
            expect(menu.hasChildren()).to.be.true;
            menu.removeChild(subMenu);
            expect(menu.hasChildren()).to.be.false;
        });

        it('getChild', function() {
            menu.addChild(subMenu);
            expect(menu.getChild(0)).to.equal(subMenu);
            expect(menu.getChild(0).getName()).to.equal('Винная карта');
        });

        it('hasChild', function() {
            menu.addChild(subMenu);
            expect(menu.hasChild(subMenu)).to.true;
            expect(menu.hasChild(leaf)).to.false;

            subMenu.addChild(leaf);
            expect(subMenu.hasChild(leaf)).to.true;
        });
    });

});