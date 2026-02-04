---
layout: course
title: Modern Bare Metal Systems with Rust
description: A student-run short course on systems programming for modern, disaggregated embedded architectures. We bridge the gap between traditional microcontroller firmware and server-class driver development using the Raspberry Pi 5.
instructor: Devansh Lodha
year: 2026
term: TBD
location: TBD
time: TBD
course_id: TBD
schedule:
  - week: 1
    date: TBD
    topic: The Disaggregated Shift & Bootstrapping
    description: Introduction to the BCM2712 and RP1 Southbridge. Setting up the Rust toolchain and transitioning from Assembly _start to Rust main at EL1.

  - week: 2
    date: TBD
    topic: PCIe Root Complex & Address Translation
    description: Initializing the PCIe Gen2 link. Configuring Inbound/Outbound windows (BARs) so the CPU can "see" the peripheral bus.

  - week: 3
    date: TBD
    topic: RP1 Enumeration
    description: Scanning the PCIe bus to discover the RP1 (Vendor ID 0x1DE4). Enabling Bus Mastering and mapping the Southbridge's internal address space.

  - week: 4
    date: TBD
    topic: Modern Interrupts (MSI-X & MIP)
    description: Moving beyond physical IRQ wires. Configuring the Machine Interrupt Peripheral (MIP) "doorbell" and routing MSI-X messages to the CPU.

  - week: 5
    date: TBD
    topic: Drivers & The Firmware Trap
    description: Implementing the PL011 UART driver over PCIe. Debugging the critical VPU firmware conflict INT_MASKL_VPU to enable console output.
---

## Course Overview

This is a specialized short course designed for students interested in advanced systems programming. Unlike traditional embedded courses that focus on simple microcontrollers with flat memory maps, this course tackles the complexity of **modern Single Board Computers (SBCs)** like the Raspberry Pi 5, which utilize server-class disaggregated architectures.

Over five intensive sessions, we will demystify how to bring up a bare-metal kernel in **Rust**, covering the entire vertical stack from the instruction set up to the peripheral driver.

## Learning Outcomes

By the end of this short course, you will understand:
- **PCIe Orchestration:** How to manually manage the link between an Application Processor (BCM2712) and an I/O Southbridge (RP1).
- **Address Translation:** How to configure Base Address Registers (BARs) and MMU windows.
- **Interrupt Routing:** How Message Signaled Interrupts (MSI-X) work and how to configure the GICv2.
- **Hardware Debugging:** How to reverse-engineer undocumented behavior in commodity silicon.

## Prerequisites

- **Systems Programming:** Comfort with C, C++, or Rust (pointers, memory management, bitwise operations).
- **Computer Architecture:** Basic understanding of registers, interrupts, stacks, and virtual memory.
- **Hardware:** A Raspberry Pi 5 and a USB-to-UART debug probe are highly recommended for following along.

## Resources

- **Primary Reference:** *Bare Metal Orchestration on the Raspberry Pi 5* (Course Notes).
- **Datasheets:**
  - *RP1 Peripherals Specification*
- **Language:** *The Rust Programming Language*