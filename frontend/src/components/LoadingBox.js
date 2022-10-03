import Spinner from 'react-bootstrap/Spinner';

export default function LoadingBox() {
  return (
    <Spinner animation="boarder" role="status">
      <span className="visually-hidden">Loading...</span>
    </Spinner>
  );
}
