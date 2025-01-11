---
title: "Łukasz's Corner - Beyond Rust: Exploring Swift for High-Performance Backend Services"
articleTitle: "Beyond Rust: Exploring Swift for High-Performance Backend Services"
description: "In recent years, backend development has taken a turn into system programming languages as demand grows for scale and performance. This trend has mostly been led by Go or, in recent years, Rust. Yet there might be one more alternative that still waits to shine."
imageLightSrc: "/rust-vs-swift/swift_logo.png"
imageDarkSrc: "/rust-vs-swift/swift_logo.png"
tags: ["Programming", "Backend", "Rust", "Swift"]
---

In recent years, backend development has taken a turn into system programming languages as demand grows for scale and performance. This trend has mostly been led by Go or, in recent years, Rust. Yet there might be one more alternative that still waits to shine.

## Why consider alternatives?
A recent trend is to rewrite everything to Rust. Don’t get me wrong, Rust is a great language with great performance and memory safety, but there is one caveat with using Rust. It is language complexity and its steep learning curve. For someone transitioning from a higher-level language, it might not be so easy to grasp what Rust is about quickly, moreover, if you have several people that you want to transit into this new world, it might be even harder.

One prominent language that is often skipped when considering performance is Swift. I know that it is supposed to be “Apple only”, but in recent years, there has been a growing movement not only from the community but also from Apple to make Swift a great language on the server side, and that’s what I want to show you today.With its concise syntax, memory management model, and growing support, it is a tempting alternative.

## High-Level Comparison of Rust and Swift in Backend Contexts

### Performance 
Rust and Swift provide great performance, but how they handle memory is different.

### Concurrency Models
Rust relies on ownership and borrowing rules, making it safe but hard to master. On the other hand, with its actor model, Swift aims to be easy and secure.

### Performance vs Control

While Rust provides more precise control over memory, Swift provides a more balanced approach with just enough details without compromising too much on performance.

### DevEx

Rust may feel complex with its compile-time checks targeting high correctness. Swift, on the other hand, is designed to be more approachable.

## Rust in the backend development

Before diving deeper into Swift and why I consider it a nice alternative to Rust, first, I would like to bring closer to why Rust is so successful on the backend.

### Memory Safety

First, of course, is the much-desired memory safety. Rust doesn't use a garbage collector instead, it enforces strict rules for ownership and borrowing that ensure safety on runtime.

```rust
fn main() {
    let s1 = String::from("hello");

    let len = calculate_length(s1);

    println!("The length of '{s1}' is {len}.");
}

fn calculate_length(s: String) -> usize {
    s.len()
}
```

If we try to run the following code snippet, it will result in the following error in the console.

<img class="mx-auto" src="/rust-vs-swift/rust_borrow_checker_example.png" alt="Rust Borrow Checker Example"/>

In short, it is because we try to use the ‘s1’ variable, which was moved into the scope of the function in the main scope. Of course, from our perspective, it is a simple operation that we, as programmers, know will not cause any issues. But in specific scenarios, such code could lead to race conditions, so Rust’s strict rules make sure that it is not possible in all cases.  

### Performance and Zero-Cost Abstractions

Rust compiles o machine code, which leads to performance similar to C/C++ level. Zero-cost abstraction means that even if we write high-level code with a lot of syntactic sugar, performance is not sacrificed.

<img class="mx-auto" src="/rust-vs-swift/mandelbrot_rust_cpp.png" alt="Rust Borrow Checker Example"/>

[Benchmark source](https://benchmarksgame-team.pages.debian.net/benchmarksgame/fastest/rust-gpp.html)

### Concurrency

In today’s world, where a lot of applications are created with highly concurrent environments in mind, Rust, with its ownership rules, thrives. It helps to make sure that data race chances are minimised when processing parallel a high volume of requests.

### Use cases
Even though I will be mainly talking about Rust from a backend development perspective, it is also worth mentioning other use cases, for which Rust is a popular choice. 
With the recent boom in AI, Rust managed to slip also there. With libraries like [Polars](https://github.com/pola-rs/polars/) (numpy but in Rust) or [Candle](https://github.com/huggingface/candle) for ML tasks, Rust takes the ML/AI scene by storm. 
Rust with its impressive performance is also frequently used to create CLI tools which examples are [ripgrep](https://github.com/BurntSushi/ripgrep) or [zoxide](https://github.com/ajeetdsouza/zoxide).
 Lastly, it is also frequently used to build infrastructure like databases where one example is [TiKV](https://github.com/tikv/tikv) or runtimes like [Deno](https://github.com/denoland).

## Why Swift?

### Performance

First of all, its performance is not far off from Rust or C++. 
<img class="mx-auto" src="/rust-vs-swift/mandelbrot_swift_cpp.png" alt="Rust Borrow Checker Example"/>

[Benchmark source](https://benchmarksgame-team.pages.debian.net/benchmarksgame/fastest/swift-gpp.html)

<img class="mx-auto" src="/rust-vs-swift/mandelbrot_swift_rust.png" alt="Rust Borrow Checker Example"/>

[Benchmark source](https://benchmarksgame-team.pages.debian.net/benchmarksgame/fastest/swift-rust.html)

Swift might not be as fast, but as I mentioned earlier, we sacrifice a little bit of speed for more pleasant language to work with.
What’s interesting though is the comparison to Go, which is also highly popular in the fast-performance microservices world.

<img class="mx-auto" src="/rust-vs-swift/mandelbrot_swift_go.png" alt="Rust Borrow Checker Example"/>

[Benchmark source](https://benchmarksgame-team.pages.debian.net/benchmarksgame/fastest/swift-go.html)

As you can see, swift can be up to two times faster! Behind this performance, of course, stands the fact that Swift is compiled to native machine code. 

### Memory Management with ARC

For memory management, a swift leverage system is called automatic reference counting (ARC). It automatically handles memory management by keeping count of references to objects. When the count hits zero, the object is deallocated. This approach is a nice balance between simplicity and performance, as, in general, programmers need zero knowledge of how this mechanism works under the hood, yet we still achieve low latency as memory is released as soon as reference go out of scope, without garbage collector pause.

```swift
class Person {
    let name: String
    init(name: String) {
        self.name = name
        print("\(name) is being initialized")
    }

    deinit {
        print("\(name) is being deinitialized")
    }
}

var reference1: Person?
var reference2: Person?
var reference3: Person?

reference1 = Person(name: "John Appleseed")
// Prints "John Appleseed is being initialized"

reference2 = reference1
reference3 = reference1

reference1 = nil
reference2 = nil

reference3 = nil
// Prints "John Appleseed is being deinitialized"
```

Here is an example that shows how ARC works in practice: we create an object and assign it to three different variables. Only after the last reference is set to nil, the object is deallocated as soon as it is set.

### Concurrency Model

Swift leverages async/await, which is pretty much standard these days in all languages but is essential for high-performance services, as it is a lot easier to read and write code that looks synchronous rather than use a lot of nesting. The real power of Swift for concurrency lies in an Actor Model.

#### Actor Model
It is a concurrency paradigm designed to manage access to shared mutable objects safely with concurrency. It was introduced to simplify writing concurrent code by also keeping the state safe from data races. The actor model has the following properties:

- State Encapsulation – the actor is, in fact, a reference type that by itself protects its own mutable state, ensuring that only one task at the time can access its data.
- Concurrency Safety – All methods exposed by the Actor are asynchronous by default, so the calling code needs to await them. This property makes sure that not a single call is blocking and ensures that only one task accesses its data.
- Task Serialization – tasks that are sent to the actor are executed in a queue, one task at a time. 
- Isolation of Shared State – A shared state is isolated from concurrent access, making the actor model ideal for managing shared resources.

```swift
actor Counter {
    private var value: Int = 0 // State is private to the actor

    // Method to increment the counter
    func increment() {
        value += 1
    }

    // Method to retrieve the current value
    func getValue() -> Int {
        return value
    }
}

@main
struct ActorExample {
    static func main() async {
        let counter = Counter()

        // Create concurrent tasks to increment the counter
        await withTaskGroup(of: Void.self) { group in
            for _ in 1...100 {
                group.addTask {
                    await counter.increment()
                }
            }
        }

        let finalValue = await counter.getValue()
        print("Final counter value: \(finalValue)")
    }
}
```
Here, the simple example shows how an actor can be created and leveraged, as you can see, methods require the ‘await’ keyword even though in the Actor declaration, ‘async’ keyword is not mentioned anywhere explicitly.

#### Sendable Protocol

The second part of what makes Swift concurrency great is the Sendable protocol, and this one is like what we have in Rust. It allows you to mark types that can be safely passed through different concurrency domains, such as tasks or threads. Even though Rust possesses a similar mechanism, I would like to expand on the different properties that Sendable give us.
- Thread Safety – if the type conforms to the protocol, it guarantees that it is safe to pass it through different contexts.
- Automatic Conformance – Many standard Swift types automatically conform to the Sendable protocol. Additionally, it automatically derives conformance for structs and classes if all their properties are also Sendable.
- Custom Types – If your custom type contains properties that are not Sendable, you must explicitly adopt the protocol and ensure proper synchronisation when accessing those from multiple threads.
- Isolation – Swift guarantees that the Sendable instance will not be modified when passed to another task, thus avoiding data races.

```swift
// Define a struct that conforms to Sendable
struct Point: Sendable {
    var x: Int
    Var y: Int
}

func performConcurrentWork(point: Point) async {
    // Simulating some work with the point
    print("Processing point: (\(point.x), \(point.y))")
}

@main
struct MyApp {
    static func main() async {
        let point = Point(x:10, y:20)

        // Call the async function with a Sendable point
        await performConcurrentWork(point: point)
    }
}
```

### Low-Level Control
Similar to Rust, Swift has some mechanisms that allow for more low-level control. 

#### Direct Memory Access
Swift provides low-level tools like unsafe pointers, which bypasses ARC for fine-grained memory management. It is also possible to use inlined assembly to interact with CPU-specific features, enabling hardware optimisations (though, for now, it is only available for Apple CPUs).

```swift
func directMemoryExample() {
    let size = 3
    let pointer = UnsafeMutablePointer<Int>.allocate(capacity: size)
    pointer.initialize(to: 42, count: size)

    for i in 0..<size {
        pointer[i] = i * 10 // Directly manipulate memory
        print("Value at index \(i): \(pointer[i])")
    }

    pointer.deinitialize(count: size)
    pointer.deallocate()
}

@main
struct MyApp {
    static func main() async {
        directMemoryExample()
    }
}
```

#### Interfacing with C libraries
Swift can interoperate with C libraries, allowing to use of existing C code for critical performance paths.

```swift
func calculateHypotenuse(a: Double, b: Double) -> Double {
    return hypot(a, b) // Calls c library function
}

@main
struct MyApp {
    static func main() async {
        let hypotenuse = calculateHypotenuse(a: 3.0, b: 4.0)
        print("Hypotenuse: \(hypotenuse)")
    }
}
```

### Developer Friendly Syntax
Lastly, I think (even though I have written more Rust code than Swift) that Swift has a nice syntax that is more developer-friendly and easier to grasp for everyone. Let’s take a look at the example of loading file content and printing it.

#### Swift
```swift
@main
struct MyApp {
    static func main() async {
        do {
            let contents = try String(contentsOfFile: "file.txt")
            print(contents)
        } catch {
            print("Error reading file: \(error))
        }
    }
}
```

#### Rust
```rust
use std::fs::File;
use std::io::{self, Read};

fn main() -> io::Result<()> {
    let mut file = File::open("file.txt")?;
    let mut contents = String::new();
    file.read_to_string(&mut contents)?;
    println!("{}", contents);
    Ok(())
}
```

As you can see, swift can be read as plain English, whereas in the case of Rust, there are a lot of keywords, special characters and noise that make the example harder to understand.

## Swift Backend Ecosystem
I hope that these few arguments convinced you that Swift is indeed an interesting language, and it is more than just “Apple language”, and it can’t be used for much more than only Apple platforms. Now, I want to bring you closer to the Swift backend ecosystem.

### Swift Server Workgroup (SSWG)
Founded by Apple, it plays an active role in growing Swift for backend development. It is responsible for some of the core projects that allow for using Swift on the backend.

Additionally, this year at WWDC, Apple finally “admitted” the fact that Server Side Swift is a thing by releasing [this short presentation](https://www.youtube.com/watch?v=OWNjtWUb9bs) on that topic.

### Packages
<img class="mx-auto" src="/rust-vs-swift/packages.png" alt="Swift Server Side Packages"/>

Swift’s package manager (SPM) and growing community resources make it easy to find and use backend-related packages. 

### Key Frameworks
Several frameworks exist that allow for quick and easy creation of backend services in Swift. Today, I want to discuss one that is core to all other frameworks and the two most popular ones for this day.

#### SwiftNIO
Developed by Apple, SwiftNIO is a low-level framework for asynchronous network applications. Providing an event-driven, non-blocking architecture, SwiftNIO is the core networking engine for frameworks like Vapor and Hummingbird. It’s also a powerful tool for developers to build custom high-performance servers or protocol-specific applications from scratch.

#### Vapor
<img class="mx-auto" src="/rust-vs-swift/vapor.png" alt="Vapor webpage"/>
One of the first and the most widely used server-side Swift framework. Vapor is designed for building high-performance web applications and APIs. It provides routing, middleware, templating, and database integrations (e.g., Fluent ORM), making it a great choice for full-stack development with Swift.

#### Hummingbird
<img class="mx-auto" src="/rust-vs-swift/hummingbird.png" alt="Hummingbird webpage"/>
The youngest, lightweight Swift framework is built on top of SwiftNIO. Hummingbird is ideal for developers seeking more control over their server architecture. It can be compared to ExpressJS in the JS ecosystem. Its modular approach allows developers to pick and choose the components they need, making it highly customizable.

### Databases Support
The most popular database driver is Fluent. It is an ORM (Object-Relational Mapping) library built for Vapor, supporting databases like MySQL, PostgreSQL, SQLite, and MongoDB. Fluent provides a way to define models and manage migrations additionally, it can be incorporated into other frameworks (e.g. Hummingbird). Additionally, Swift’s backend ecosystem also includes libraries for databases such as Redis, SQLite, PostgreSQL, and MongoDB.

### Cross-Platform Compatibility 
As said, these days Swift is much more than only Apple platforms language, it is finally cross-platform. It is fully compatible with Linux, which allows applications to be hosted on popular cloud platforms like AWS, Google Cloud, and Azure, where Linux is the standard for backend environments. Apple has also expanded support to Windows, opening opportunities for cross-platform development where both Linux and Windows are used. This compatibility is mostly valuable for people who use Windows as their daily operating system.

### Deployment
Swift can be easily deployed to any cloud provider not only as a binary on Linux but also it can be containerized. Apple provides Pre-built Swift images that can be found on Docker Hub, making it straightforward to prepare such containers.

## Conclusions
I hope this post made you curious about Swift in the context of backend services development, and next time when you will be evaluating what technology to use for your blazing-fast application, Swift will be on that list ;).