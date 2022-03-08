class Person {
  first_name: string
  last_name: string
  age: number

  constructor(first_name: string, last_name: string, age: number) {
    this.first_name = first_name
    this.last_name = last_name
    this.age = age
  }

  greet() {
    console.log("Hello", this.first_name)
  }

  ageInYears(years: number): number {
    return this.age + years
  }
}

// var p: Person

// p = new Person()
// p.first_name = "Aman"
// p.greet()

var p: Person = new Person("Aman", "Dugar", 20)
p.age = 6

console.log(p.ageInYears(12))

class Report {
  data: Array<string>
  constructor(data: Array<string>) {
    this.data = data
  }
  run() {
    this.data.forEach(function (line) {
      console.log(line)
    })
  }
}

class TabbedReport extends Report {
  headers: Array<string>
  constructor(headers: string[], values: string[]) {
    super(values)
    this.headers = headers
  }
  run() {
    console.log(this.headers)
    super.run()
  }
}

var headers: string[] = ["Name"]
var data: string[] = ["Alice Green", "Paul Pfifer", "Louis Blakenship"]
var r: TabbedReport = new TabbedReport(headers, data)
r.run()

var newData: string[] = ["Alice Green", "Paul Pfifer", "Louis Blakenship"]
newData.forEach(line => console.log(line))
