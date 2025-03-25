export class task {
    constructor(description) {
        this.description = description;
        this.completed = false;
    }

    toggleComplete() {
        this.completed = !this.completed;
    }
};