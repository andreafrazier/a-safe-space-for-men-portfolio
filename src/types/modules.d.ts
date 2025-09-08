// Ensure TypeScript recognizes our path mappings
declare module '@/*' {
  const content: any;
  export default content;
}

declare module '@/types/*' {
  const content: any;
  export default content;
}

declare module '@/components/*' {
  const content: any;
  export default content;
}

declare module '@/data/*' {
  const content: any;
  export default content;
}