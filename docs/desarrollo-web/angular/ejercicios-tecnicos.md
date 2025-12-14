# Ejercicios tecnicos de Angular

### Migrar de Observables a Signals (Facil)

```typescript
import { Component } from '@angular/core';
import { of } from 'rxjs';

@Component({
  selector: 'app-example',
  template: ''
})
export class ExampleComponent {
  // Observable que emite un solo valor
  message$ = of('Hello from Observable!');
}
```

Resultado:

```typescript
import { Component, signal } from '@angular/core';

@Component({
  selector: 'app-example',
  template: ''
})
export class ExampleComponent {
  // Signal que contiene el mismo valor
  message = signal('Hello from Signal!');
}
```

### Migrar de Observables a Signals (Medio)

Teniendo este codigo hecho en Observables, migrarlo a Signals

Cada 2 segundos emite un número aleatorio entre 0 y 99.
Si quisieras mostrarlo en la vista, usarías `{{ randomNumber$ | async }}`

```typescript
import { Component, OnInit } from '@angular/core';
import { Observable, interval, map } from 'rxjs';

@Component({
  selector: 'app-random-number',
  template: '' // omitido
})
export class RandomNumberComponent implements OnInit {
  randomNumber$!: Observable<number>;

  ngOnInit() {
    // Simula flujo continuo de datos cada 2 segundos
    this.randomNumber$ = interval(2000).pipe(
      map(() => Math.floor(Math.random() * 100))
    );
  }
}
```

Resultado:

```typescript
import { Component, signal, effect } from '@angular/core';

@Component({
  selector: 'app-random-number',
  template: '' // omitido
})
export class RandomNumberComponent {
  // Signal que contiene el número actual
  randomNumber = signal<number>(Math.floor(Math.random() * 100));

  constructor() {
    // Efecto que actualiza el número cada 2 segundos
    setInterval(() => {
      this.randomNumber.set(Math.floor(Math.random() * 100));
    }, 2000);

    // Ejemplo de efecto reactivo
    effect(() => {
      console.log('Nuevo número:', this.randomNumber());
    });
  }
}
```

### Migrar de Observables a Signals (Dificil)

```typescript
import { Component } from '@angular/core';
import { BehaviorSubject, map } from 'rxjs';

@Component({
  selector: 'app-toggle',
  template: '' // omitido
})
export class ToggleComponent {
  // Estado
  private enabledSubject = new BehaviorSubject<boolean>(false);
  enabled$ = this.enabledSubject.asObservable();

  // Derivado: texto según estado
  statusText$ = this.enabled$.pipe(
    map(on => (on ? 'Enabled' : 'Disabled'))
  );

  // Acción
  toggle() {
    this.enabledSubject.next(!this.enabledSubject.value);
  }
}
```

Resultado:

```typescript
import { Component, signal, computed } from '@angular/core';

@Component({
  selector: 'app-toggle',
  template: '' // omitido
})
export class ToggleComponent {
  // Estado
  enabled = signal<boolean>(false);

  // Derivado
  statusText = computed(() => (this.enabled() ? 'Enabled' : 'Disabled'));

  // Acción
  toggle() {
    this.enabled.update(v => !v);
  }
}
```

### Refactor de two-way binding clásico (`@Input/@Output)` a `model()`

- Teniendo este codigo hecho en two-way binding clásico (`@Input/@Output)`), refactorizarlo a `model()`
- Requiere `EventEmitter` y `emit()` en cada cambio de estado.

```typescript
import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-counter',
  template: '' // omitido
})
export class CounterComponent {
  @Input() count = 0;
  @Output() countChange = new EventEmitter<number>();

  increment() {
    this.count++;
    this.countChange.emit(this.count);
  }

  decrement() {
    this.count--;
    this.countChange.emit(this.count);
  }

  reset() {
    this.count = 0;
    this.countChange.emit(this.count);
  }
}
```

Resultado:

```typescript
import { Component, model } from '@angular/core';

@Component({
  selector: 'app-counter',
  template: '' // omitido
})
export class CounterComponent {
  // 'count' es un Signal con soporte nativo para two-way binding
  count = model(0);

  increment() {
    this.count.update(v => v + 1);
  }

  decrement() {
    this.count.update(v => v - 1);
  }

  reset() {
    this.count.set(0);
  }
}
```