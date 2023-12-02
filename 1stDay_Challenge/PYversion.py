class Gifts():
    def __init__(self, ids):
        self.ids = ids

    # Return first id is repeted in the following ids of the list
    def repeted_first(self):
        result = -1
        for i in range(len(self.ids)):
            num = self.ids[0]
            if num in self.ids[i+1:]:
                return num
        return result