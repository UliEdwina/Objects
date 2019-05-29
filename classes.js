let TermTwo  = class {
    constructor(branch, term, course, students){
    this.branch = branch;
    this.term = term;
    this.course = course
    this.students = students
    }
}

const description = new TermTwo("Code Imersives", 2, "javsacript", ["uli", "Mintae", "Jimmy", "Miguel"] )


console.log(description)