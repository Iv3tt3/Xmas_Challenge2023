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