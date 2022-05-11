import React, { lazy, Suspense } from 'react';

const LazyTodo = lazy(() => import('./Todo'));

const Todo = (props: JSX.IntrinsicAttributes & { children?: React.ReactNode; }) => (
  <Suspense fallback={null}>
    <LazyTodo name={''} completed={false}  {...props} />
  </Suspense>
);

export default Todo;
