package sk.ikariera.project.model;

import com.fasterxml.jackson.annotation.JsonBackReference;
import org.hibernate.annotations.CreationTimestamp;

import javax.persistence.*;
import java.util.Date;

/**
 * Created by michal on 4.3.2017.
 */
@Entity
public class Photo {
    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private Long photoId;

    private String photoName;
    private String title;
    private String description;
    private String imageName;
    private int likes;

    @CreationTimestamp
    private Date created;

    @ManyToOne
    @JsonBackReference /*Check this*/
    private User user;

    public int getLikes() {
        return likes;
    }

    public void setLikes(int likes) {
        this.likes = likes;
    }

    public Long getPhotoId() {
        return photoId;
    }

    public void setPhotoId(Long photoId) {
        this.photoId = photoId;
    }

    public String getPhotoName() {
        return photoName;
    }

    public void setPhotoName(String photoName) {
        this.photoName = photoName;
    }

    public String getTitle() {
        return title;
    }

    public void setTitle(String title) {
        this.title = title;
    }

    public String getDescription() {
        return description;
    }

    public void setDescription(String description) {
        this.description = description;
    }

    public String getImageName() {
        return imageName;
    }

    public void setImageName(String imageName) {
        this.imageName = imageName;
    }

    public Date getCreated() {
        return created;
    }

    public void setCreated(Date created) {
        this.created = created;
    }

    public User getUser() {
        return user;
    }

    public void setUser(User user) {
        this.user = user;
    }
}
