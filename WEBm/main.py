import eel

eel.init('web')

# @eel.expose
# def add(a):
#     print(a)

eel.start('index.html', size=(850, 500))