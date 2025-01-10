---
title: "Łukasz's Corner - Beyond Rust: Exploring Swift for High-Performance Backend Services"
articleTitle: "Beyond Rust: Exploring Swift for High-Performance Backend Services"
description: "In recent years, backend development has taken a turn into system programming languages as demand grows for scale and performance. This trend has mostly been led by Go or, in recent years, Rust. Yet there might be one more alternative that still waits to shine."
imageLightSrc: ""
imageDarkSrc: ""
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