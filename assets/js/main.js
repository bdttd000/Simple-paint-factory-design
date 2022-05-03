// TOOLS

class Tool {
    constructor() {
        this.brush = new Brush(10, 'blue')
        this.pencil = new Pencil(1, 'red')
        this.shape = new Shape(20, 'green')
    }

    getTool(tool) {
        switch(tool) {
            case 'brush':
                return this.brush;
            case 'pencil':
                return this.pencil;
            case 'shape':
                return this.shape;
        }
    }
}

const factory = new Tool()