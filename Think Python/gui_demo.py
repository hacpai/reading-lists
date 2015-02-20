from swampy.Gui import *


def callback1():
    g.bu('Now press me', command=callback2)

def callback2():
    g.la('Nice job!')
    g.bu('Draw circle.', command=callable3)

def callable3():
    global circle
    circle = canvas.circle([0,0], 100, fill='white')

def change_color():
    if circle == None:
        return 'Create a circle before press button.'
    color = entry.get()
    try:
        circle.config(fill=color)
    except:
        message = 'probaly an unknown color name'
        print message


g = Gui()

g.title('Gui')
button = g.bu(text='Press it', command=callback1)
canvas = g.ca(width=500, height=500)
circle = None
#canvas.config(bg='black')
#item = canvas.rectangle([[0, 0], [200, 200]],
        #fill='white', outline='orange',width=10)

#item = canvas.oval([[0, 0], [200, 100]],
        #fill='white', outline='orange',width=10)
#item = canvas.line([[0, 100], [100, 200], [200, 100]], width=10, fill='white')
#item = canvas.polygon([[0, 100], [100, 200], [200, 100]], width=10, fill='white', outline='orange')
#entry = g.en(text='Default text.')
#print entry.get()
#text = g.te(width=100, height=5)
#text.insert(2.3, 'nother')
#text.delete(0.2, END)
#print text.get(0.0, END)
entry = g.en(text='Type a color')
button_color = g.bu(text='Change color', command=change_color)

g.mainloop()
