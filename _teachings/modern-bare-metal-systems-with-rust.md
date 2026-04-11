---
layout: course
title: Modern Bare Metal Embedded Systems with Rust
description: A bottom-up exploration of computer architecture, operating system bootstrapping, and hardware interfacing using the Raspberry Pi 5. 
instructor: Devansh Lodha
year: 2026
term: 2
location: AB 7/103
time: 9:30 PM - 10:50 PM
course_id: SC 409
schedule:
  - day: 1
    date: April 7, 2026
    topic: Firmware and Introduction
    description: Applications and Industry Landscape. Abstractions. Analysis of the VideoCore VII boot sequence, SD card configuration. Introduction to Cross Compilation and the Build Pipeline.
    materials:
      - name: Slides
        url: https://github.com/devansh-lodha/sc-409-pi5-bare-metal/blob/main/slides/sc_409_lecture_1.pdf

  - day: 2
    date: April 8, 2026
    topic:  The Debug Probe, and ARM CoreSight. Hardware Debugging. The ARMv8-A Architecture - I
    description: Utilizing Serial Wire Debug (SWD) via OpenOCD and GDB to hijack the BCM2712 CPU execution pipeline. The RISC Load/Store paradigm, AArch64 register file.
    materials:
      - name: Slides
        url: https://github.com/devansh-lodha/sc-409-pi5-bare-metal/blob/main/slides/sc_409_lecture_2.pdf

  - day: 3
    date: April 9, 2026
    topic:  The ARMv8-A Architecture - II
    description: ALU operations. Deconstructing the cross-compilation pipeline, GNU Assembler directives, and Linker scripts to map physical RAM. Establishing the runtime environment. Enforcing AAPCS64 stack alignment, zeroing the .bss section.
    materials:
      - name: Slides
        url: https://github.com/devansh-lodha/sc-409-pi5-bare-metal/blob/main/slides/sc_409_lecture_3.pdf

  - day: 4
    date: April 10, 2026
    topic: The C-ABI Bridge and Exception Levels
    description: Forging an Exception Context to drop from EL2 (Hypervisor) to EL1 (Kernel), and executing the jump to Rust. Writing a reentrant panic handler.
    materials:
      - name: Slides
        url: https://github.com/devansh-lodha/sc-409-pi5-bare-metal/blob/main/slides/sc_409_lecture_4.pdf

  - day: 5
    date: April 11, 2026
    topic: , Memory-Mapped I/O and Hardware Discovery, Zero-Cost Abstractions and Safe Hardware Drivers
    description: Interacting with physical peripherals. Using datasheets and device trees. Using volatile memory operations to bypass LLVM compiler optimizations and prevent data corruption. Replacing raw pointers with Peripheral Access Crates (PACs). Using zero-sized types and move semantics to implement the Typestate pattern. Building a mathematically safe, polled PL011 UART driver and formatting engine.
    materials:
      - name: Slides
        url: 
---

## Course Overview

This course bridges the gap between high-level software and physical silicon. Students will construct a bare-metal execution environment from scratch on the Raspberry Pi 5 (Cortex-A76). Bypassing standard operating systems and libraries, the curriculum relies exclusively on hardware datasheets, the ARM architectural reference manuals, and physical debug probes.

Primary technical objectives:
- Manipulate raw CPU state using hardware debuggers (SWD/JTAG).
- Write and analyze AArch64 assembly and Linker scripts.
- Bootstrap a minimal C/Rust runtime environment.
- Interface with peripheral hardware via MMIO.
- Leverage Rust's type system to enforce compile-time hardware safety.

## Repository

All course materials, automation scripts, and source code are maintained in the primary repository:
[https://github.com/devansh-lodha/sc-409-pi5-bare-metal](https://github.com/devansh-lodha/sc-409-pi5-bare-metal)

## Prerequisites

- Understanding of binary and hexadecimal arithmetic.
- Familiarity with the the CLI.
- Basic understanding of computer organization (memory, CPU, registers).

## References

The course material is derived directly from the following hardware documentation:
- [*ARM Cortex-A Series Programmer’s Guide for ARMv8-A*](https://cs140e.sergio.bz/docs/ARMv8-A-Programmer-Guide.pdf)
- [*Raspberry Pi RP1 Peripherals Datasheet*](https://pip-assets.raspberrypi.com/categories/892-raspberry-pi-5/documents/RP-008370-DS-1-rp1-peripherals.pdf?disposition=inline)
- [*Raspberry Pi BCM2711 ARM Peripherals Datasheet*](https://pip-assets.raspberrypi.com/categories/545-raspberry-pi-4-model-b/documents/RP-008248-DS-1-bcm2711-peripherals.pdf?disposition=inline)

## Grading

Pass will be awarded for full attendance.