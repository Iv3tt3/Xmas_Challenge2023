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
    
    # Return first id is repeted in the previous ids of the list
    def first_repeted(self):
        result = -1
        ids = []
        for id in self.ids:
            if id in ids:   
                return id
            ids.append(id)
        return result
    
    # Return a dict of the repeated ids and how many times
    def times_repeted(self):
        result = {}
        ids = []
        for id in self.ids:
            if id in ids:   
                result[str(id)] = (lambda: result[str(id)] + 1 if str(id) in result else 1)()
            ids.append(id)
        return result