# Design Patterns

## What is a Design Pattern?  
Design patterns are reusable, proven solutions to common problems in software design. Rather than being complete solutions, they are templates that developers can apply to solve specific problems effectively. Using design patterns helps standardize solutions, making code more readable, maintainable, and collaborative.

---

## Why Use Design Patterns?  
1. **Maintainability**: Design patterns lead to well-structured code that is easier to debug, understand, and update.  
2. **Extensibility**: They enable adding new features or functionalities with minimal changes to existing code.  
3. **Flexibility**: Patterns decouple components, allowing changes in one part without affecting others.  
4. **Best Practices**: They encapsulate years of software development experience, providing tried-and-true methods for solving problems.

---

## Categories of Design Patterns

### 1. Creational Design Patterns  
These patterns deal with the creation of objects, optimizing and abstracting the instantiation process.  

- **Factory Method**
- **Abstract Factory**
- **Builder**
- **Prototype**
- **Singleton**

---

### 2. Structural Design Patterns  
These patterns focus on the composition of classes and objects to form larger, flexible structures.  

- **Adapter**
- **Bridge**
- **Composite**
- **Decorator**
- **Facade**
- **Flyweight**
- **Proxy** 

---

### 3. Behavioral Design Patterns  
These patterns focus on communication and interactions between objects to ensure efficient collaboration.  

- **Chain of responsibility**
- **Command**
- **Interpreter**
- **Iterator**
- **Mediator**
- **Memento**
- **Observer**
- **State**
- **Strategy**
- **Template Method**
- **Visitor**

## References
- [Design Patterns: The Movie](https://youtu.be/2-4k5FhPlmg?si=sluhdegnoCSyKTTI)
- [Saturngod](https://designpatterns.saturngod.net/)

## Steps to Test

**Install Dependencies**  

Run the following command to install the required 
dependencies:  

```bash
npm install
```
**Run the Specific Design Pattern**

Use the following command to test a specific design pattern, replacing [PatternName] with the desired pattern (e.g., factory):

```bash
npm start dist/factory
```