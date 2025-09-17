import { createCollectionContext } from './CreateCollectionContext';

const {
  CollectionProvider: PreviewDegreeProvider,
  useCollection: useAllPreviews,
  useCollectionItem: usePreview,
} = createCollectionContext();

export { PreviewDegreeProvider, useAllPreviews, usePreview };