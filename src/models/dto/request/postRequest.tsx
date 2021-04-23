export interface AddPostRequest {
  content: string;
  is_anonymous: boolean;
  title: string;
  images: string[];
}

class AddPostRequestDTO {
  content: string;
  is_anonymous: boolean;
  title: string;
  images: string[];
  setContent(content: string) {
    this.content = content;
    return this;
  }
  setAnonymous(anonymous: boolean) {
    this.is_anonymous = anonymous;
    return this;
  }
  setTitle(title: string) {
    this.title = title;
    return this;
  }
  setImages(images: string[]) {
    this.images = images;
    return this;
  }
}

export default AddPostRequestDTO;
