from PYversion import Gifts

def test_create_class():
    ids = [2, 1, 3, 5, 3, 2]
    gifts = Gifts(ids)
    assert gifts.ids == ids

    ids1 = [1, 2, 3, 4]
    gifts1 = Gifts(ids1)
    assert gifts1.ids == ids1

    ids2 = [5, 1, 5, 1]
    gifts2 = Gifts(ids2)
    assert gifts2.ids == ids2

def test_repeted_first():
    ids = [2, 1, 3, 5, 3, 2]
    gifts = Gifts(ids)
    assert gifts.repeted_first() == 2

    ids1 = [1, 2, 3, 4]
    gifts1 = Gifts(ids1)
    assert gifts1.repeted_first() == -1

    ids2 = [5, 1, 5, 1]
    gifts2 = Gifts(ids2)
    assert gifts2.repeted_first() == 5

def test_first_repeted():
    ids = [2, 1, 3, 5, 3, 2]
    gifts = Gifts(ids)
    assert gifts.first_repeted() == 3

    ids1 = [1, 2, 3, 4]
    gifts1 = Gifts(ids1)
    assert gifts1.first_repeted() == -1

    ids2 = [5, 1, 5, 1]
    gifts2 = Gifts(ids2)
    assert gifts2.first_repeted() == 5

def test_times_repeted_IDs():
    ids = [2, 1, 3, 5, 3, 2]
    gifts = Gifts(ids)
    assert gifts.times_repeted() == {'2': 1, '3': 1}

    ids1 = [1, 2, 3, 4]
    gifts1 = Gifts(ids1)
    assert gifts1.times_repeted() == {}

    ids2 = [5, 1, 5, 1]
    gifts2 = Gifts(ids2)
    assert gifts2.times_repeted() == {'5': 1, '1': 1}