import IFile from './IFile';

export default interface IDirectory {
  type: 'directory';
  name: string;
  size: string;
  time: string;
  contents: [IDirectory | IFile];
}
