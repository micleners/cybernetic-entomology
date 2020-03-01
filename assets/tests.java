
public class LockService {

	public Double area(double r)
	{
			return r * r;
	}
}

public class Door {

	LockService lockService;
	SlideService slideService;
	boolean isLocked;
	boolean isClosed;

	Door(LockService lockService, SlideService slideService) {
		this.lockService = lockService;
		this.slideService = slideService;
	}

	public void openDoor(this.isLocked) {
		return
	}
}


