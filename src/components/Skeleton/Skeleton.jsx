import ContentLoader from 'react-content-loader';

const imagesSkeleton = () => {
  return (
    <ContentLoader
      speed={2}
      width={1487}
      height={600}
      viewBox="0 0 1487 600"
      backgroundColor="#24243e"
      foregroundColor="#000080"
      style={{ paddingLeft: '20px' }}
    >
      <rect x="0" y="0" rx="3" ry="3" width="365" height="260" />
      <rect x="373" y="0" rx="3" ry="3" width="365" height="260" />
      <rect x="746" y="0" rx="3" ry="3" width="365" height="260" />
      <rect x="1119" y="0" rx="3" ry="3" width="365" height="260" />
      <rect x="0" y="277" rx="3" ry="3" width="365" height="260" />
      <rect x="373" y="277" rx="3" ry="3" width="365" height="260" />
      <rect x="746" y="277" rx="3" ry="3" width="365" height="260" />
      <rect x="1119" y="277" rx="3" ry="3" width="365" height="260" />
    </ContentLoader>
  );
};

export default imagesSkeleton;
